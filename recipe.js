ServerEvents.recipes(event => {
    event.remove({ input: 'minecraft:red_nether_bricks' })
    event.remove({ output: 'minecraft:red_nether_bricks' })
    event.remove({ output: 'allthemodium:teleport_pad' })
    event.remove({ id: `/compat_forge:molten_metals/slag` })
    event.remove({ output: 'createbigcannons:molten_bronze' })
    Color.DYE.forEach(color => {
        ['terracotta', 'glazed_terracotta', 'concrete', 'concrete_powder'].forEach(block => {
            event.remove({ input: `minecraft:${color}_${block}` })
            event.remove({ input: `minecraft:${color}_${block}` })
            event.remove({ input: `minecraft:${color}_${block}` })
            event.remove({ output: `minecraft:${color}_${block}` })
            event.remove({ output: `minecraft:${color}_${block}` })
            event.remove({ output: `minecraft:${color}_${block}` })
        })
    })
    event.shaped(`minecraft:warden_spawn_egg`, [
        ` a `,
        `aba`,
        ` a `
    ], {
        a: `minecraft:echo_shard`,
        b: `minecraft:egg`
    }).id(`tamamo_the_tweaks:warden_spawn_egg`)
    event.replaceInput({ output: 'cobblefordays:tier_5' }, 'minecraft:glass', 'cobblefordays:tier_4')
    event.replaceInput({ output: 'cobblefordays:tier_4' }, 'minecraft:glass', 'cobblefordays:tier_3')
    event.replaceInput({ output: 'cobblefordays:tier_3' }, 'minecraft:glass', 'cobblefordays:tier_2')
    event.replaceInput({ output: 'cobblefordays:tier_2' }, 'minecraft:glass', 'cobblefordays:tier_1')
    event.shaped(`minecraft:black_dye`, [
        `a`
    ], {
        a: `minecraft:charcoal`
    }).id(`tamamo_the_tweaks:black_dye`)
    event.shaped(`minecraft:chest`, [
        `a`
    ], {
        a: '#functionalstorage:drawer'
    }).id(`tamamo_the_tweaks:chest1`)
    event.shaped(`minecraft:sticky_piston`, [
        `a`,
        'b'
    ], {
        a: 'industrialforegoing:dryrubber',
        b: 'minecraft:piston'
    }).id(`tamamo_the_tweaks:sticky_piston`)
})