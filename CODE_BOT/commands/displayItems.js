const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    displayItems: {
        data: new SlashCommandBuilder()
            .setName('display-items')
            .setDescription('Affiche les items du registre')
            .addStringOption(option =>
                option.setName('filter')
                        .setDescription('Filtre optionnel pour les items')
                        .setRequired(false)),
            async execute(interaction) {
                const filter = interaction.options.getString('filter');
                let url = 'http://localhost:3000/items';
                if (filter) {
                    url += `?filter=${filter}`;
                }
                try {
                    const response = await axios.get(url);
                    const items = response.data;
                    const itemList = items.map(item => `- ${item.name}`).join('\n');
                    await interaction.reply(`Items du registre${filter ? ` (filtrés par "${filter}")` : ''}:\n${itemList}`);
                } catch (error) {
                    console.error(error);
                    await interaction.reply('Une erreur s\'est produite lors de la récupération des items.');
                }
            },
    },
}