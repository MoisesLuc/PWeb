export function montarTabela(cervejas) {
if (!cervejas || cervejas.length === 0) {
return "Nenhuma cerveja encontrada.";
}

let cabecalho = `
    <tr>
        <th>Nome</th>
        <th>Estilo</th>
        <th>Malte</th>
        <th>Levedura</th>
    </tr>
`;

let linhas = cervejas.map(c => `
    <tr>
        <td>${c.name}</td>
        <td>${c.style}</td>
        <td>${c.malt}</td>
        <td>${c.yeast}</td>
    </tr>
`).join("");

return `<table>${cabecalho}${linhas}</table>`;


}