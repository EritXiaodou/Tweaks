// priority: 0
const cobbled = [
    `allthecompressed:stone_block_1x`,
    `allthecompressed:granite_block_1x`,
    `allthecompressed:diorite_block_1x`,
    `allthecompressed:andesite_block_1x`,
    `allthecompressed:tuff_block_1x`
]
const graveld = [
    `allthecompressed:cobblestone_block_1x`,
    `allthecompressed:cobbled_deepslate_block_1x`
]
const sand = [
    `allthecompressed:gravel_block_1x`
]
const dust = [
    `allthecompressed:red_sand_block_1x`,
    `allthecompressed:sand_block_1x`
]
const orehammers = [
    `ftbsba:netherite_hammer`,
    `ftbsba:diamond_hammer`,
    `ftbsba:gold_hammer`,
    `ftbsba:iron_hammer`
]
const rubber = [
    `thermal:rubber`,
    `industrialforegoing:tinydryrubber`
]

const sieves = [
    'exnihilosequentia:string_mesh',
    'exnihilosequentia:flint_mesh',
    'exnihilosequentia:iron_mesh',
    'exnihilosequentia:diamond_mesh',
    'exnihilosequentia:emerald_mesh',
    'exnihilosequentia:netherite_mesh'
]

ServerEvents.tags('item', event => {
    event.add('forge:storage_blocks/stone', [`allthecompressed:stone_block_1x`])
    event.add('forge:storage_blocks/deepslate', [`allthecompressed:deepslate_block_1x`])
    event.add('forge:storage_blocks/granite', [`allthecompressed:granite_block_1x`])
    event.add('forge:storage_blocks/diorite', [`allthecompressed:diorite_block_1x`])
    event.add('forge:storage_blocks/andesite', [`allthecompressed:andesite_block_1x`])
    event.add('forge:storage_blocks/tuff', [`allthecompressed:tuff_block_1x`])
    event.add('forge:storage_blocks/cobblestone', [`allthecompressed:cobblestone_block_1x`])
    event.add('forge:storage_blocks/cobbled_deepslate', [`allthecompressed:cobbled_deepslate_block_1x`])
    event.add('forge:storage_blocks/gravel', [`allthecompressed:gravel_block_1x`])
    event.add('forge:storage_blocks/basalt', [`allthecompressed:basalt_block_1x`])
    event.add('forge:storage_blocks/dirt', [`allthecompressed:dirt_block_1x`])
    event.add('forge:storage_blocks/clay', [`allthecompressed:clay_block_1x`])
    event.add('forge:storage_blocks/obsidian', [`allthecompressed:obsidian_block_1x`])
    event.add('forge:storage_blocks/red_sand', [`allthecompressed:red_sand_block_1x`])
    event.add('forge:storage_blocks/sand', [`allthecompressed:sand_block_1x`])
    event.add('forge:storage_blocks', [`tamamo_the_tweaks:dust_block_1x`])
    event.add('forge:storage_blocks/dust', [`tamamo_the_tweaks:dust_block_1x`])
    event.add('forge:storage_blocks/endstone', [`allthecompressed:endstone_block_1x`])
    event.add('forge:storage_blocks/netherrack', [`allthecompressed:netherrack_block_1x`])
    event.add('forge:storage_blocks/blaze', [`tamamo_the_tweaks:blaze_rod_block`])
    event.add('forge:plastic', [`mekanism:hdpe_sheet`])
    event.add('ftbsba:auto_hammers', [`ftbsba:netherite_auto_hammer`])
    event.add('ftbsba:auto_hammers', [`ftbsba:diamond_auto_hammer`])
    event.add('ftbsba:auto_hammers', [`ftbsba:gold_auto_hammer`])
    event.add('ftbsba:auto_hammers', [`ftbsba:iron_auto_hammer`])
    event.add('forge:meshs/string', ['exnihilosequentia:string_mesh'])
    event.add('forge:meshs/flint', ['exnihilosequentia:flint_mesh'])
    event.add('forge:meshs/iron', ['exnihilosequentia:iron_mesh'])
    event.add('forge:meshs/diamond', ['exnihilosequentia:diamond_mesh'])
    event.add('forge:meshs/emerald', ['exnihilosequentia:emerald_mesh'])
    event.add('forge:meshs/netherite', ['exnihilosequentia:netherite_mesh'])
    event.get('thermal:crafting/dies').add('tamamo_the_tweaks:plate_die')
})
ServerEvents.tags('item', event => {
    event.add('forge:cobbled_block', cobbled)
    event.add('forge:graveld_block', graveld)
    event.add('forge:sanded_block', sand)
    event.add('forge:dusted_block', dust)
    event.add('alltheores:ore_hammers', orehammers)
    event.add('forge:rubber', rubber)
    event.add('forge:meshs', sieves)
    event.add('forge:sieves', ['#forge:meshs', '#exnihilosequentia:sieves'])
})
ServerEvents.tags('block', event => {
    event.add('forge:cobbled_block', cobbled)
    event.add('forge:graveld_block', graveld)
    event.add('forge:sanded_block', sand)
    event.add('forge:dusted_block', dust)
})
ServerEvents.tags('block', event => {
    event.add('forge:storage_blocks', [`tamamo_the_tweaks:dust_block_1x`])
    event.add('forge:storage_blocks/dust', [`tamamo_the_tweaks:dust_block_1x`])
    event.add('forge:storage_blocks/red_sand', [`allthecompressed:red_sand_block_1x`])
    event.add('forge:storage_blocks/sand', [`allthecompressed:sand_block_1x`])
    event.add('forge:storage_blocks/blaze', [`tamamo_the_tweaks:blaze_rod_block`])
})
ServerEvents.tags('fluid', event => {
    event.add('forge:cryotheum', [`kubejs:cryotheum`])
})
