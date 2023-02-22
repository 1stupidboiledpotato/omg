// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000a04040404040404040404040401000005060608060606060606060606080000050207030707070707000600000800000500000000000000000606060008000005000000000000000006000600080000050000000000000000060006000800000500000000000000000600060008000005000000000609000006000000080000050000000006000000060000000800000500000000060000000606060008000005000000000606000000000600080000050000000000060606060606000800000500000006060600000000000008000002070707070707070707070707030000000000000000000000000000000000`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 2 2 2 2 2 . 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 . . . 2 . 2 
2 . 2 2 2 2 2 2 2 2 . 2 . 2 . 2 
2 . 2 2 2 2 2 2 2 2 . 2 . 2 . 2 
2 . 2 2 2 2 2 2 2 2 . 2 . 2 . 2 
2 . 2 2 2 2 . . 2 2 . 2 2 2 . 2 
2 . 2 2 2 2 . 2 2 2 . 2 2 2 . 2 
2 . 2 2 2 2 . 2 2 2 . . . 2 . 2 
2 . 2 2 2 2 . . 2 2 2 2 . 2 . 2 
2 . 2 2 2 2 2 . . . . . . 2 . 2 
2 . 2 2 2 . . . 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
