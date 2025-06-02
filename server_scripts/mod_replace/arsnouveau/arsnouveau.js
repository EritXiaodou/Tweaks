ServerEvents.recipes(event => {
    //附魔装置
    /*event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:sand",
            "minecraft:sand",
            "minecraft:sand",
            "minecraft:sand",
        ], // 输入物品
        "minecraft:gunpowder", // 反应物
        "minecraft:tnt", // 输出物品
        1000, //魔源消耗
        // true // 是否保持nbt，就像锻造台那样
    )
    //附魔
    event.recipes.ars_nouveau.enchantment(
        [
            "minecraft:sand",
            "minecraft:sand",
            "minecraft:sand",
            "minecraft:sand",
        ], // 输入物品
        "minecraft:vanishing_curse", // 应用的附魔
        1, // 附魔等级
        1000, //魔源消耗
    )
    //魔符压印器
    event.recipes.ars_nouveau.crush(
        "minecraft:tnt", // 输入方块
        [{
            item: "minecraft:sand",
            chance: 1
        }] // 掉落物品表
        // true // 是否掉落在世界中
    )
    // 可以直接使用 `/ars-tome id` 在这种情况下 `/ars-tome kubejs:not_glow`
    event.recipes.ars_nouveau.caster_tome(
        "Not-Glow Trap", // 名字,
        [
            "ars_nouveau:glyph_touch",
            "ars_nouveau:glyph_rune",
            "ars_nouveau:glyph_snare",
            "ars_nouveau:glyph_extend_time",
            "ars_nouveau:glyph_light"
        ], //魔咒
        "Doesn't snare the target and grant other targets Glowing.", // 描述
        16718260, // 颜色
        {
            "family": "ars_nouveau:default",
            "pitch": 1.0,
            "volume": 1.0
        },
    ).id("kubejs:not_glow")
    //灌注
    event.recipes.ars_nouveau.imbuement(
        "minecraft:sand", //输入物品
        "minecraft:tnt", // 输出物品
        1000, // 魔源消耗
        [
            "minecraft:gunpowder"
        ] // 基座物品 // 可选
    )*/
    event.custom(
        {
            "type": "ars_nouveau:enchanting_apparatus",
            "keepNbtOfReagent": false,
            "output": {
                "item": "tamamo_the_tweaks:cosmic_upgrade_augment"
            },
            "pedestalItems": [
                {
                    "item": "tamamo_the_tweaks:cosmic_upgrade"
                },
                {
                    "item": "tamamo_the_tweaks:alloy_cosmic"
                },
                {
                    "item": "mekanism:pellet_polonium"
                },
                {
                    "item": "tamamo_the_tweaks:alloy_cosmic"
                },
                {
                    "item": "industrialforegoing:machine_frame_supreme"
                },
                {
                    "item": "tamamo_the_tweaks:alloy_cosmic"
                },
                {
                    "item": "mekanism:pellet_polonium"
                },
                {
                    "item": "tamamo_the_tweaks:alloy_cosmic"
                }
            ],
            "reagent": [
                {
                    "item": "tamamo_the_tweaks:supreme_upgrade_augment"
                }
            ],
            "sourceCost": 10000
        }
    )
})
