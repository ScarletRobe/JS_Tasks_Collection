// https://www.codewars.com/kata/525c65e51bf619685c000059/solutions/javascript
/* Pete likes to bake some cakes. He has some recipes and ingredients.
Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object)
and returns the maximum number of cakes Pete can bake (integer).
For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
Ingredients that are not present in the objects, can be considered as 0.
*/

const cakes = (recipe, available) =>
    Math.min(...Object.keys(recipe).map((key) => {
        if (Object.keys(available).indexOf(key) === -1) {
            return 0;
        }
        return Math.floor(available[key] / recipe[key])
    }))

// Best solution(not mine)
const cakes2 = (needs, has) => Math.min(
    ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
  )