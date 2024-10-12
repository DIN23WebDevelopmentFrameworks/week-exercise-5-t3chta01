import {useEffect, useState} from "react";
import RecipeList from "./components/RecipeList.tsx";
import RecipeTagList from "./components/RecipeTagList.tsx";
import './style.css'

interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

const App = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes/tags")
            .then(response => response.json())
            .then(data => setTags(data));
    }, []);

    useEffect(() => {
        if (selectedTag) {
            fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
                .then(response => response.json())
                .then(data => setRecipes(data.recipes));
        }
    }, [selectedTag]);

    const handleTagSelect = (tagName: string) => {
        setSelectedTag(tagName);
    };

    return (
        <div className="App">
            <h1>ACME Recipe O'Master</h1>
            {selectedTag ? (
                <RecipeList recipes={recipes} />
            ) : (
                <RecipeTagList tagList={tags} onSelectTag={handleTagSelect} />
            )}
            {selectedTag && <button onClick={() => setSelectedTag(null)}>Back</button>}
        </div>
    );
}

export default App;
