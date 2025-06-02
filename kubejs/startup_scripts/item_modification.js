ItemEvents.modification(event => {
    event.modify('minecraft:flint', item => {
        item.maxDamage = 8
    })
})