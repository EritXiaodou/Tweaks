ServerEvents.recipes(event => {
    event.remove({ output: '#botanypots:all_botany_pots' })
    event.custom({
        "type": "crafting_shaped",
        "pattern": [
            "ABA",
            "ACA",
            " A "
        ],
        "key": {
            "A": { "item": "minecraft:terracotta" },
            "B": { "item": "minecraft:flower_pot" },
            "C": { "item": "minecraft:hopper" }
        },
        "result": {
            "item": "botanypots:terracotta_hopper_botany_pot",
            "count": 1
        }
    }).id('tamamo_the_tweaks:hopper_botany_pot')
    event.custom({
        "type": "crafting_shaped",
        "pattern": [
            "ABA",
            "CDC",
            "EFE"
        ],
        "key": {
            "A": { "item": "alltheores:iron_gear" },
            "B": { "item": "minecraft:iron_nugget" },
            "C": { "item": "alltheores:iron_plate" },
            "D": { "item": "botanypots:terracotta_hopper_botany_pot" },
            "E": { "item": "minecraft:iron_block" },
            "F": { "item": "minecraft:blaze_rod" }
        },
        "result": { "item": "botanypotstiers:elite_terracotta_hopper_botany_pot", "count": 1 }
    }).id('tamamo_the_tweaks:elite_hopper_botany_pot')
    event.custom({
        "type": "crafting_shaped",
        "pattern": [
            "ABA",
            "CDC",
            "EFE"
        ],
        "key": {
            "A": { "item": "alltheores:diamond_gear" },
            "B": { "item": "minecraft:nether_star" },
            "C": { "item": "alltheores:diamond_plate" },
            "D": { "item": "botanypotstiers:elite_terracotta_hopper_botany_pot" },
            "E": { "item": "minecraft:diamond_block" },
            "F": { "item": "minecraft:ender_pearl" }
        },
        "result": { "item": "botanypotstiers:ultra_terracotta_hopper_botany_pot", "count": 1 }
    }).id('tamamo_the_tweaks:ultra_hopper_botany_pot')
    event.custom({
        "type": "crafting_shaped",
        "pattern": [
            " A ",
            "BCB"
        ],
        "key": {
            "A": { "item": "botanypotstiers:ultra_terracotta_hopper_botany_pot" },
            "B": { "item": "minecraft:netherite_block" },
            "C": { "item": "minecraft:enchanted_golden_apple" }
        },
        "result": { "item": "botanypotstiers:creative_terracotta_hopper_botany_pot", "count": 1 }
    }).id('tamamo_the_tweaks:creative_hopper_botany_pot')
    function soil(block, categories, tick, modifier) {
        event.recipes.botanypots.soil(block, { block: block }, [categories], tick, modifier)
    }
    soil('allthecompressed:dirt_block_1x', 'dirt', 100, 1.25)
    soil('allthecompressed:dirt_block_2x', 'dirt', 100, 1.35)
    soil('allthecompressed:dirt_block_3x', 'dirt', 100, 1.45)
    soil('allthecompressed:dirt_block_4x', 'dirt', 100, 1.55)
    soil('allthecompressed:dirt_block_5x', 'dirt', 100, 1.65)
    soil('allthecompressed:dirt_block_6x', 'dirt', 100, 1.75)
    soil('allthecompressed:dirt_block_7x', 'dirt', 100, 1.85)
    soil('allthecompressed:dirt_block_8x', 'dirt', 100, 1.95)
    soil('allthecompressed:dirt_block_9x', 'dirt', 100, 2.05)

    soil('allthecompressed:grass_block_1x', 'dirt', 100, 1.30)
    soil('allthecompressed:grass_block_2x', 'dirt', 100, 1.40)
    soil('allthecompressed:grass_block_3x', 'dirt', 100, 1.50)
    soil('allthecompressed:grass_block_4x', 'dirt', 100, 1.60)
    soil('allthecompressed:grass_block_5x', 'dirt', 100, 1.70)
    soil('allthecompressed:grass_block_6x', 'dirt', 100, 1.80)
    soil('allthecompressed:grass_block_7x', 'dirt', 100, 1.90)
    soil('allthecompressed:grass_block_8x', 'dirt', 100, 2.00)
    soil('allthecompressed:grass_block_9x', 'dirt', 100, 2.10)

    function botanypots(seed, growthTicks, result, loot1, loot2, id) {
        event.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": seed
            },
            "categories": [
                "dirt"
            ],
            "growthTicks": growthTicks,
            "display": {
                "block": seed
            },
            "drops": [
                { "chance": 1.00, "output": { "item": result }, "minRolls": 4, "maxRolls": 6 },
                { "chance": 0.50, "output": { "item": loot1 } },
                { "chance": 0.25, "output": { "item": seed } },
                { "chance": 0.05, "output": { "item": loot2 } }
            ]
        }).id(id)
    }
    function botanypots2(seed, growthTicks, result, loot1, loot2, loot3, id) {
        event.custom({
            "type": "botanypots:crop",
            "seed": {
                "item": seed
            },
            "categories": [
                "dirt"
            ],
            "growthTicks": growthTicks,
            "display": {
                "block": seed
            },
            "drops": [
                { "chance": 1.00, "output": { "item": result }, "minRolls": 4, "maxRolls": 6 },
                { "chance": 0.50, "output": { "item": loot1 } },
                { "chance": 0.25, "output": { "item": seed } },
                { "chance": 0.05, "output": { "item": loot2 } },
                { "chance": 0.05, "output": { "item": loot3 }, "minRolls": 0, "maxRolls": 2 }
            ]
        }).id(id)
    }
    botanypots('minecraft:oak_sapling', 300, 'minecraft:oak_log', 'minecraft:oak_log', 'minecraft:apple', 'tamamo_the_tweaks:oak_crop')
    botanypots('minecraft:spruce_sapling', 300, 'minecraft:spruce_log', 'minecraft:spruce_log', 'minecraft:stick', 'tamamo_the_tweaks:spruce_crop')
    botanypots('minecraft:birch_sapling', 300, 'minecraft:birch_log', 'minecraft:birch_log', 'minecraft:stick', 'tamamo_the_tweaks:birch_crop')
    botanypots('minecraft:jungle_sapling', 300, 'minecraft:jungle_log', 'minecraft:jungle_log', 'minecraft:stick', 'tamamo_the_tweaks:jungle_crop')
    botanypots('minecraft:acacia_sapling', 300, 'minecraft:acacia_log', 'minecraft:acacia_log', 'minecraft:stick', 'tamamo_the_tweaks:acacia_crop')
    botanypots('minecraft:dark_oak_sapling', 300, 'minecraft:dark_oak_log', 'minecraft:dark_oak_log', 'minecraft:stick', 'tamamo_the_tweaks:dark_oak_crop')
    botanypots2('integrateddynamics:menril_sapling', 300, 'integrateddynamics:menril_log', 'integrateddynamics:menril_log_filled', 'integrateddynamics:menril_berries', 'integrateddynamics:crystalized_menril_chunk', 'tamamo_the_tweaks:menril_crop')
})
