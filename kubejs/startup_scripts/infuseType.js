const $EventBuses = Java.loadClass('dev.architectury.platform.forge.EventBuses')
const $GasDeferredRegister = Java.loadClass('mekanism.common.registration.impl.GasDeferredRegister')
const $SlurryDeferredRegister = Java.loadClass('mekanism.common.registration.impl.SlurryDeferredRegister')
const $InfuseTypeDeferredRegister = Java.loadClass('mekanism.common.registration.impl.InfuseTypeDeferredRegister')

// const SLURRY = new $SlurryDeferredRegister('kubejs')
const GASES = new $GasDeferredRegister('kubejs')
const INFUSETYPE = new $InfuseTypeDeferredRegister('kubejs')

// SLURRY.register('example_slurry', builder => builder.color(0xA020F0))
//GASES.register('diamond', 0x49EAD6)
INFUSETYPE.register('copper', 0xE27752)

// SLURRY['register(net.minecraftforge.eventbus.api.IEventBus)']($EventBuses.getModEventBus('kubejs').get())
GASES.register($EventBuses.getModEventBus('kubejs').get())
INFUSETYPE.register($EventBuses.getModEventBus('kubejs').get())