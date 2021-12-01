const studentsIds = [
    'joana-notas',
    'maria-notas',
    'pedro-notas',
]

const calculateNotes = (student) => {
    const studentId = studentsIds.findIndex(name => `${student}-notas` === name);
    const tr = document.getElementById(studentsIds[studentId]);
    const prova1Input = Number(tr.cells[1].firstElementChild.value) || 0;
    const prova2Input = Number(tr.cells[2].firstElementChild.value) || 0;
    const exameInput = Number(tr.cells[3].firstElementChild.value) || 0;
    const mediaInput = tr.cells[4].firstElementChild;

    mediaInput.value = Number(getMedia(prova1Input, prova2Input, exameInput)).toFixed(2);
}

const getMedia = (prova1, prova2, exame) => (prova1 + prova2 + exame) / 3

const onSave = () => {
    alert('Notas lançadas com sucesso')
}

const onClearInputs = () => {
    const inputs = document.getElementsByTagName('input');
    Array.from(inputs).forEach(el => (el.value = 0))
}

