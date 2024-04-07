const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    addItemToWatchlist: {
        data: new SlashCommandBuilder()
            .setName('add-item-to-watchlist')
            .setDescription('Ajoute un item dans une watchlist')
            .addStringOption(option =>
                option.setName('user')
                    .setDescription('Le nom de l\'utilisateur')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('item')
                    .setDescription('Le nom de l\'item')
                    .setRequired(true)),
        async execute(interaction) {
            const user = interaction.options.getString('user');
            const item = interaction.options.getString('item');
            try {
                await axios.post(`http://localhost:3000/watchlists/${user}/items`, { name: item });
                await interaction.reply(`L'item "${item}" a été ajouté à la watchlist de l'utilisateur "${user}".`);
            } catch (error) {
                console.error(error);
                await interaction.reply('Une erreur s\'est produite lors de l\'ajout de l\'item à la watchlist.');
            }
        },
    },
}