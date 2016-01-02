QUnit.test( 'getParent', function( assert ) {

  var getParent = fizzyUIUtils.getParent;

  var gridA = document.querySelector('.grid-a');
  var itemA1 = document.querySelector('.item-a1');

  var parent = getParent( itemA1, '.grid' );
  assert.equal( parent, gridA, 'got grid parent from item' );

  parent = getParent( document.querySelector('.span-a3'), '.grid' );
  assert.equal( parent, gridA, 'got grid parent from span' );

  parent = getParent( itemA1, '#qunit' );
  assert.ok( parent === undefined, 'parent not tree is undefined' );

});
