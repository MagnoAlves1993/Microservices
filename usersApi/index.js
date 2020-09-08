const app = require('express')()
const port = 3001

let users = [{ id: 1, name: 'João' }, { id: 2, name: 'Maria' }, { id: 3, name: 'John Doe' },

]

app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(port, () => console.log(`serviço rodando na porta ${port}`))