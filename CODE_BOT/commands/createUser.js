const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    createUser: {
        data: new SlashCommandBuilder()
            .setName('create-user')
            .setDescription('Crée un nouvel utilisateur')
            .addStringOption(option =>
                option.setName('username')
                    .setDescription('Le nom de l\'utilisateur')
                    .setRequired(true)),
        async execute(interaction) {
            const username = interaction.options.getString('username');
            try {
                await axios.post('http://localhost:3000/users', { username });
                await interaction.reply(`L'utilisateur ${username} a été créé avec succès.`);
            } catch (error) {
                console.error(error);
                await interaction.reply('Une erreur s\'est produite lors de la création de l\'utilisateur.');
            }
        },
    },
}
