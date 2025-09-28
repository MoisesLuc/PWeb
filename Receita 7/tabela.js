export function montarTabela(dados) {
    if(!dados || dados.length === 0) return "<div>Nenhum dado encontrado.</div>";

    let html = "<table><tr>";

    for(let chave in dados[0]) {
        html += "<th>" + chave + "</th>";
    }
    html += "</tr>";

    for(let i = 0; i < dados.length; i++) {
        html += "<tr>";
        for(let chave in dados[i]) {
            html += "<td>" + dados[i][chave] + "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    return html;
}