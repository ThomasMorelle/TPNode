const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    addItem: {
        data: new SlashCommandBuilder()
            .setName('add-item')
            .setDescription('Ajoute un nouvel item au registre')
            .addStringOption(option =>
                option.setName('item')
                    .setDescription('Le nom de l\'item')
                    .setRequired(true)),
        async execute(interaction) {
            const item = interaction.options.getString('item');
            try {
                await axios.post('http://localhost:3000/items', { name: item });
                await interaction.reply(`L'item "${item}" a été ajouté au registre.`);
            } catch (error) {
                console.error(error);
                await interaction.reply('Une erreur s\'est produite lors de l\'ajout de l\'item.');
            }
        },
    },
}