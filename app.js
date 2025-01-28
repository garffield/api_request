const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });