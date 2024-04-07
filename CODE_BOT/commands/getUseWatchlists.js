const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    getUserWatchlists: {
        data: new SlashCommandBuilder()
            .setName('get-user-watchlists')
            .setDescription('Récupère la liste des watchlists d\'un utilisateur')
            .addStringOption(option =>
                option.setName('user')
                    .setDescription('Le nom de l\'utilisateur')
                    .setRequired(true)),
        async execute(interaction) {
            const user = interaction.options.getString('user');
            try {
                const response = await axios.get(`http://localhost:3000/watchlists/${user}`);
                const watchlists = response.data;
                const watchlistsList = watchlists.map(watchlist => `- ID: ${watchlist.id}`).join('\n');
                await interaction.reply(`Watchlists de l'utilisateur "${user}":\n${watchlistsList}`);
            } catch (error) {
                console.error(error);
                await interaction.reply('Une erreur s\'est produite lors de la récupération de la liste des watchlists de l\'utilisateur.');
            }
        },
    },
}