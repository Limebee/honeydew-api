const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors())

const drinks = {
    "abc": {
        "name" : 'ABC',
        "drinkType": 'Juice',
        "ingredients": 'apple, beet, cucumber',
        "benefits": 'boosts immune system',
        "src": "https://images.pexels.com/photos/4443472/pexels-photo-4443472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    'mean green': {
        'name': 'Mean Green',
        'drinkType': 'Juice',
        'ingredients': 'spinach, kale, celery, ginger, parsley, dandelion',
        'benefits': 'reduces inflamation',
        'src': "https://images.pexels.com/photos/4443434/pexels-photo-4443434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    'lemon flush': {
        'name': 'Lemon Flush',
        'drinkType': 'Juice',
        'ingredients': 'lemon, apple, ginger, cayenne',
        'benefits': 'detoxes body, helps with nasuea',
        'src': "https://images.pexels.com/photos/10323614/pexels-photo-10323614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    'liver cleanse': {
        'name': 'Liver Cleanse',
        'drinkType': 'Juice',
        'ingredients': 'beet, green apple, dandelion',
        'benefits': 'promotes liver health',
        'src': "https://images.pexels.com/photos/5945669/pexels-photo-5945669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
    },

    'dragon fly': {
        'name': 'Dragon Fly',
        'drinkType': 'Juice',
        'ingredients': 'dragonfruit',
        'benefits': 'boost iron levels, strengthen immune system',
        'src': "https://images.pexels.com/photos/4443496/pexels-photo-4443496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    'liquid sunshine': {
        'name': "Liquid Sunshine",
        'drink type': 'Juice',
        'ingredients': 'orange, carrot, ginger',
        'benefits': 'reduces kidney stone risk, boosts immunity, reduces cancer risk',
        'src': "https://images.pexels.com/photos/4443448/pexels-photo-4443448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    'peanut butter crunch': {
        'name': 'Peanut Butter Crunch',
        'drinkType': 'Smoothie',
        'ingredients': 'banana, peanut butter, cacao, garnola, protien powder',
        'benefits': 'improves heart health, helps with weight loss',
        'src': "https://images.pexels.com/photos/4112870/pexels-photo-4112870.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    'aloha suprise': {
        'name': 'Aloha Suprise',
        'drinkType': 'Smoothie',
        'ingredients': 'banana, mango, ginger, coconut water, pineapple juice',
        'benefits': 'boosts immunity, helps reduce inflamation',
        'src': "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    'berry bliss': {
        'name': 'Berry Bliss',
        'drinkType': 'Smoothie',
        'ingredients': 'banana, strawberry, raspberry, bluberry, almond milk, protien powder',
        'benefits': 'high fiber, helps lower cholestrol, loaded with antioxidants',
        'src': "https://images.pexels.com/photos/4753639/pexels-photo-4753639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    
    'strawberry special': {
        'name': 'Strawberry Special',
        'drinkType': 'Smoothie',
        'ingredients': 'strawberry, garnola, peanuts, banana, coconut milk',
        'benefits': 'helps support heart health, good source of fiber',
        'src': "https://images.pexels.com/photos/8805115/pexels-photo-8805115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    }
    
    'boost shot': {
        'name': 'Boost Shot',
        'drinkType': 'Shot',
        'ingredients': 'lemon, ginger, garlic, flax oil, cayenne',
        'benefits': 'boost immunity, help with congestion',
        'src': "https://images.pexels.com/photos/4443464/pexels-photo-4443464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
