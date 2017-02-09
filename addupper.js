/**
 * Addupper WOD
 * Created by jojona on 2/9/17.
 */

function addUpper(statement) {
  const lets = _.print(statement);
  const new  = function(statement){

    return statement.toUpperCase();

  };

  return _.compose(new);
}

console.log(addUpper(['apple', 'pear']));

