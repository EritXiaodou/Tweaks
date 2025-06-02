StartupEvents.registry('item', e => {
  //e.create('plate_osmium').displayName('锇板')
  e.create('tamamo_the_tweaks:plate_die').displayName('板铸模具')

  e.create('tamamo_the_tweaks:alloy_absolute').displayName('珍贵合金')
  e.create('tamamo_the_tweaks:alloy_supreme').displayName('卓越合金')
  e.create('tamamo_the_tweaks:alloy_cosmic').displayName('寰宇合金')
  e.create('tamamo_the_tweaks:alloy_infinite').displayName('无限合金')

  e.create('tamamo_the_tweaks:enriched_copper').displayName('富集铜')
  e.create('tamamo_the_tweaks:enriched_yellow_cake_uranium').displayName('富集铀黄饼')

  e.create('tamamo_the_tweaks:absolute_upgrade').displayName('珍贵控制升级')
  e.create('tamamo_the_tweaks:supreme_upgrade').displayName('卓越控制升级')
  e.create('tamamo_the_tweaks:cosmic_upgrade').displayName('寰宇控制升级')
  e.create('tamamo_the_tweaks:infinite_upgrade').displayName('无限控制升级')

  e.create('tamamo_the_tweaks:compressed_core').displayName('压缩空间核心')
  e.create('tamamo_the_tweaks:armor_base').displayName('盔甲核心')

  e.create('tamamo_the_tweaks:pyrotheum_dust').displayName('炽焰粉')
  //颜色
  /*
  0-
  1-紫色
  
  
  
  */
  e.create('tamamo_the_tweaks:absolute_upgrade_augment', "thermal:upgrade_augment").setValue(16).setRarityById("RARE",1).displayName('珍贵控制升级')
  e.create('tamamo_the_tweaks:supreme_upgrade_augment', "thermal:upgrade_augment").setValue(22).setRarityById("EPIC",1).displayName('卓越控制升级')
  e.create('tamamo_the_tweaks:cosmic_upgrade_augment', "thermal:upgrade_augment").setValue(28).setRarityById("EPIC",1).displayName('寰宇控制升级')
  e.create('tamamo_the_tweaks:infinite_upgrade_augment', "thermal:upgrade_augment").setValue(32).setRarityById("LEGEND",1).displayName('无限控制升级')
})