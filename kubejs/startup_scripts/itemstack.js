ItemEvents.modification(event => {
  event.modify('industrialforegoing:speed_addon_1', item => { item.maxStackSize = 64 })
  event.modify('industrialforegoing:speed_addon_2', item => { item.maxStackSize = 64 })
  event.modify('industrialforegoing:efficiency_addon_1', item => { item.maxStackSize = 64 })
  event.modify('industrialforegoing:efficiency_addon_2', item => { item.maxStackSize = 64 })
  event.modify('industrialforegoing:processing_addon_1', item => { item.maxStackSize = 64 })
  event.modify('industrialforegoing:processing_addon_2', item => { item.maxStackSize = 64 })

  event.modify('minecraft:ender_pearl', item => { item.maxStackSize = 64 })
  event.modify('minecraft:bucket', item => { item.maxStackSize = 64 })
  event.modify('minecraft:egg', item => { item.maxStackSize = 64 })
  event.modify('minecraft:snowball', item => { item.maxStackSize = 64 })
  event.modify('minecraft:cake', item => { item.maxStackSize = 64 })
  event.modify('minecraft:totem_of_undying', item => { item.maxStackSize = 16 })

  event.modify('powah:charged_snowball', item => { item.maxStackSize = 64 })

  event.modify('mekanism:energy_tablet', item => { item.maxStackSize = 64 })

  event.modify('mekanism:basic_fluid_tank', item => { item.maxStackSize = 32 })
  event.modify('mekanism:advanced_fluid_tank', item => { item.maxStackSize = 32 })
  event.modify('mekanism:elite_fluid_tank', item => { item.maxStackSize = 32 })
  event.modify('mekanism:ultimate_fluid_tank', item => { item.maxStackSize = 32 })

  event.modify('mekanism:basic_chemical_tank', item => { item.maxStackSize = 16 })
  event.modify('mekanism:advanced_chemical_tank', item => { item.maxStackSize = 16 })
  event.modify('mekanism:elite_chemical_tank', item => { item.maxStackSize = 16 })
  event.modify('mekanism:ultimate_chemical_tank', item => { item.maxStackSize = 16 })

  event.modify('mekanism:basic_energy_cube', item => { item.maxStackSize = 16 })
  event.modify('mekanism:advanced_fluid_tank', item => { item.maxStackSize = 16 })
  event.modify('mekanism:elite_fluid_tank', item => { item.maxStackSize = 16 })
  event.modify('mekanism:ultimate_fluid_tank', item => { item.maxStackSize = 16 })

  event.modify('mekaevolution:absolute_energy_cube', item => { item.maxStackSize = 16 })
  event.modify('mekaevolution:supreme_energy_cube', item => { item.maxStackSize = 16 })
  event.modify('mekaevolution:cosmic_energy_cube', item => { item.maxStackSize = 16 })
  event.modify('mekaevolution:infinite_energy_cube', item => { item.maxStackSize = 16 })

})