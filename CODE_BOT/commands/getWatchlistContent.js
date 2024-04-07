const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    getWatchlistContent: {
        data: new SlashCommandBuilder()
            .setName('get-watchlist-content')
            .setDescription('Récupère le contenu d\'une watchlist')
            .addStringOption(option =>
                option.setName('user')
                    .setDescription('Le nom de l\'utilisateur')
                    .setRequired(true))
            .addIntegerOption(option =>
                option.setName('watchlist-id')
                    .setDescription('L\'ID de la watchlist')
                    .setRequired(true)),
        async execute(interaction) {
            const user = interaction.options.getString('user');
            const watchlistId = interaction.options.getInteger('watchlist-id');
            try {
                const response = await axios.get(`http://localhost:3000/watchlists/${user}/${watchlistId}`);
                const watchlistItems = response.data.items;
                const itemList = watchlistItems.map(item => `- ${item.name}`).join('\n');
                await interaction.reply(`Contenu de la watchlist ${watchlistId} de l'utilisateur "${user}":\n${itemList}`);
            } catch (error) {
                console.error(error);
                await interaction.reply('Une erreur s\'est produite lors de la récupération du contenu de la watchlist.');
            }
        },
    },
}