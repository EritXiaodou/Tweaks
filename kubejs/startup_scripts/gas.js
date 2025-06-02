StartupEvents.registry('mekanism:gas', event => {
    //注册气体（id，颜色，显示的名字）
    event.create('tamamo_the_tweaks:echo_gas').color(0x03404F).displayName('气态回响')
    event.create('tamamo_the_tweaks:ether_gas').color(0xB7FDFD).displayName('凋灵气体')
    event.create('tamamo_the_tweaks:cryotheum').color(0x23F7FB).displayName('极寒之凛冰')
})