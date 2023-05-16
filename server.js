const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors())

const drinks = {
    "abc": {
        "name" : 'ABC',
        "drinkType": 'Juice',
        "ingredients": 'apple, beet, carrot',
        "benefits": 'boosts immune system',
        "src": "https://images.pexels.com/photos/4443472/pexels-photo-4443472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    'mean green': {
        'name': 'Mean Green',
        'drinkType': 'Juice',
        'ingredients': 'spinach, kale, celery, ginger, parsley, dandelion',
        'benefits': 'reduces inflamation'
    },
    'lemon flush': {
        'name': 'Lemon Flush',
        'drinkType': 'Juice',
        'ingredients': 'lemon, apple, ginger, cayenne',
        'benefits': 'detoxes body, helps with nasuea'
    },
    'liver cleanse': {
        'name': 'Liver Cleanse',
        'drinkType': 'Juice',
        'ingredients': 'beet, green apple, dandelion',
        'benefits': 'promotes liver health'
    },

    'celery craze': {
        'name': 'Celery Craze',
        'drinkType': 'Juice',
        'ingredients': 'celery',
        'benefits': 'reduces inflamation, hydrates the body'
    },
    'liquid sunshine': {
        'drink type': 'Juice',
        'ingredients': 'orange, carrot, ginger',
        'benefits': 'reduces kidney stone risk, boosts immunity, reduces cancer risk'
    },
    'peanut butter crunch': {
        'name': 'Peanut Butter Crunch',
        'drinkType': 'Smoothie',
        'ingredients': 'banana, peanut butter, cacao, garnola, protien powder',
        'benefits': 'improves heart health, helps with weight loss'
    },
    'aloha suprise': {
        'name': 'Aloha Suprise',
        'drinkType': 'Smoothie',
        'ingredients': 'banana, mango, ginger, coconut water, pineapple juice',
        'benefits': 'boosts immunity, helps reduce inflamation'
    },
    'berry bliss': {
        'name': 'Berry Bliss',
        'drinkType': 'Smoothie',
        'ingredients': 'banana, strawberry, raspberry, bluberry, almond milk, protien powder',
        'benefits': 'high fiber, helps lower cholestrol, loaded with antioxidants'
    },
    'boost shot': {
        'name': 'Boost Shot',
        'drinkType': 'Shot',
        'ingredients': 'lemon, ginger, garlic, flax oil, cayenne',
        'benefits': 'boost immunity, help with congestion'
    },

    
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:drinkName',(req,res)=>{
    const drinksName = req.params.drinkName.toLowerCase()
    if(drinks[drinksName]){
        res.json(drinks[drinksName])
    }else{
        res.json(drinks["unknown"])
    }
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is running.`)
})
