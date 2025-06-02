const leaves = [
    `minecraft:oak_leaves`,
    `minecraft:spruce_leaves`,
    `minecraft:birch_leaves`,
    `minecraft:jungle_leaves`,
    `minecraft:acacia_leaves`,
    `minecraft:dark_oak_leaves`,
    `minecraft:mangrove_leaves`,
    `minecraft:azalea_leaves`,
    `minecraft:flowering_azalea_leaves`,
    `ars_nouveau:blue_archwood_leaves`,
    `ars_nouveau:purple_archwood_leaves`,
    `ars_nouveau:green_archwood_leaves`,
    `ars_nouveau:red_archwood_leaves`,
    `thermal:rubberwood_leaves`,
    `allthemodium:ancient_leaves`,
    `allthemodium:soul_leaves`,
    `allthemodium:demonic_leaves`,
    `integrateddynamics:menril_leaves`
]

BlockEvents.modification(event => {
    event.modify(leaves, block => {
        block.hasCollision = false
    })
})