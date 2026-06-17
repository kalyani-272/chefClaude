import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from"./components/ClaudeRecipe"
import { getRecipeFromMistral } from "./ai"

export default function MainContent(){
    const [ingredients,setIngredients]=React.useState([])
   
    function addIngredients(formData){
        const newIngredients=formData.get("ingredients")
        setIngredients(prevIngredients=> [...prevIngredients,newIngredients])
    }
    async function toggleRecipeShown(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }
    const [recipe,setRecipe]=React.useState("")
    return(
        <main>
        <form action={addIngredients}>
            <input 
                type="text" 
                placeholder="e.g. oregano"
                name="ingredients"
            />
            <button >+  Add ingredients</button>
        </form>
        {ingredients.length>0 &&  
            <IngredientsList 
                 ingredients ={ingredients}
                 toggleRecipeShown={toggleRecipeShown}/>}

        {recipe&& <ClaudeRecipe recipe={recipe}/>}
    </main>
    )
}