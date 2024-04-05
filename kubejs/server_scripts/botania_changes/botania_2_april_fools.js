// priority: 0

/*
Yes this was an April fools joke, but it does technically work.
Goes with this video: https://youtu.be/y9z6CJPHsnM
The reason it works is because the botania code checks for block tags
matching minecraft:leaves, so we just remove everything from that tag.
Instead we only add the blocks that we want to be eaten.

THIS LIKELY BREAKS A TON OF OTHER MODS.
*/
ServerEvents.tags('block', event => {
    event.removeAll('minecraft:leaves')
    event.add('minecraft:leaves', 'aether:skyroot_leaves')
})


/*
Similar case for hydroangeas and thermalilies, expect we have to
override the water and lava fuid tags. 

THIS LIKELY BREAKS A TON OF OTHER MODS.
*/
ServerEvents.tags('fluid', event => {
    event.removeAll('minecraft:water')
    event.add('minecraft:water', 'enderio:cloud_seed')

    event.removeAll('minecraft:lava')
    event.add('minecraft:lava', 'enderio:fire_water')
})
