const recipes = [
    {
        image: "https://via.placeholder.com/250",
        title: "Veggie Delight",
        description: "A healthy vegetarian option.",
        dietary: "vegetarian"
    },
    {
        image: "https://via.placeholder.com/250",
        title: "Vegan Tacos",
        description: "Tasty vegan tacos with a twist.",
        dietary: "vegan"
    },
    {
        image: "https://via.placeholder.com/250",
        title: "Gluten-Free Pancakes",
        description: "Fluffy pancakes without gluten.",
        dietary: "gluten-free"
    },
    {
        image: "https://via.placeholder.com/250",
        title: "Classic Burger",
        description: "A hearty meat-based meal.",
        dietary: "all"
    },
    {
        image: "https://via.placeholder.com/250",
        title: "Mediterranean Salad",
        description: "A refreshing mix of greens, olives, and feta.",
        dietary: "vegetarian"
    },
    {
        image: "https://via.placeholder.com/250",
        title: "Avocado Toast",
        description: "Simple yet delicious vegan avocado toast.",
        dietary: "vegan"
    },
    {
        image: "https://via.placeholder.com/250",
        title: "Grilled Chicken Skewers",
        description: "Perfect for any meat lover's BBQ.",
        dietary: "all"
    },
    {
        image: "https://via.placeholder.com/250",
        title: "Quinoa Bowl",
        description: "A gluten-free bowl of goodness.",
        dietary: "gluten-free"
    },
    {
        image: "https://via.placeholder.com/250",
        title: "Zucchini Noodles",
        description: "A low-carb vegetarian pasta alternative.",
        dietary: "vegetarian"
    },
    {
        image: "https://via.placeholder.com/250",
        title: "Vegan Curry",
        description: "Spicy and flavorful vegan curry.",
        dietary: "vegan"
    },
    {
        image: "https://via.placeholder.com/250",
        title: "Protein Smoothie",
        description: "A healthy and gluten-free snack.",
        dietary: "gluten-free"
    },
    {
        image: "https://via.placeholder.com/250",
        title: "Shrimp Tacos",
        description: "A seafood lover's dream meal.",
        dietary: "all"
    }
];


// DOM Elements
const recipesContainer = document.querySelector(".recipes");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("search-input");

// Render recipes
function renderRecipes(filteredRecipes) {
    recipesContainer.innerHTML = ""; // Clear current recipes
    filteredRecipes.forEach(recipe => {
        const recipeCard = `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="content">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
        </div>
        </div>
        `;
        recipesContainer.innerHTML += recipeCard;
    });
}

// Initial render
renderRecipes(recipes);

// Filter functionality
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        if (filter === "clear") {
            renderRecipes(recipes);
            searchInput.value = ""; // Clear search bar
        } else {
            const filtered = recipes.filter(recipe =>
                recipe.dietary === filter || filter === "all"
            );
            renderRecipes(filtered);
        }
    });
});

// Search functionality
searchInput.addEventListener("input", (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(keyword) ||
        recipe.description.toLowerCase().includes(keyword)
    );
    renderRecipes(filtered);
});


const loadingIndicator = document.createElement("div");
loadingIndicator.className = "loading";
loadingIndicator.textContent = "Loading...";
recipesContainer.parentNode.insertBefore(loadingIndicator, recipesContainer);

function renderRecipesWithLoading(filteredRecipes) {
    loadingIndicator.style.display = "block";
    setTimeout(() => {
        renderRecipes(filteredRecipes);
        loadingIndicator.style.display = "none";
    }, 500); // Simulated delay
}

// Replace renderRecipes with renderRecipesWithLoading wherever needed.
