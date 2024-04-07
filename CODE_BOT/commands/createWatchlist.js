const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    createWatchlist: {
        data: new SlashCommandBuilder()
            .setName('create-watchlist')
            .setDescription('Crée une nouvelle watchlist pour un utilisateur')
            .addStringOption(option =>
                option.setName('user')
                    .setDescription('Le nom de l\'utilisateur')
                    .setRequired(true)),
        async execute(interaction) {
            const user = interaction.options.getString('user');
            try {
                await axios.post('http://localhost:3000/watchlists', { user });
                await interaction.reply(`La watchlist pour l'utilisateur "${user}" a été créée.`);
            } catch (error) {
                console.error(error);
                await interaction.reply('Une erreur s\'est produite lors de la création de la watchlist.');
            }
        },
    },
}