/// </>
// @ts-nocheck

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timer) {
    if (timer === undefined) {
      return 'You forgot to set the timer.';
    }
    if (timer === 0) {
      return 'Lasagna is done.';
    }
    
    return 'Not done, please wait.';
  }
  
  export function preparationTime(layers, averagePreparationTime) {
    if (averagePreparationTime === undefined) {
      averagePreparationTime = 2;
    }
    let totalPreparationTime = layers.length * averagePreparationTime;
    return totalPreparationTime;
    
  }
  
  export function quantities(layers) {
    let quantities = {
      noodles: 0,
      sauce: 0,
    };
    for (let layer of layers) {
      if (layer === 'noodles') {
        quantities.noodles += 50;
       
      }else if (layer === 'sauce') {
        quantities.sauce += 0.2;
      
      }
    }
    return quantities;
    
  }
  
  export function addSecretIngredient(friendsIngredients, myIngredients) {
    let secretIngredient = friendsIngredients[friendsIngredients.length - 1];
    myIngredients.push(secretIngredient);
    
  }
  
  export function scaleRecipe(recipe, portions) {
    let scaledRecipe = {};
    
    for (let ingredient in recipe) {
      let amount = recipe[ingredient];
      let scaledAmount = amount * (portions / 2);
      scaledRecipe[ingredient] = scaledAmount;
      
    }
    return scaledRecipe;
    
  }