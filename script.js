function calculateDiamonds() {
    const currentCore = parseInt(document.getElementById('currentCore').value, 10);
    const targetCore = parseInt(document.getElementById('targetCore').value, 10);
    const corePerSpin = 1; // 1 Magic Core per spin
    const diamondsPerSpin = 60; // 60 diamonds per spin

    if (isNaN(currentCore) || isNaN(targetCore) || currentCore < 0 || targetCore <= currentCore) {
        document.getElementById('result').textContent = 'Please enter valid Magic Core values.';
        return;
    }

    const requiredCore = targetCore - currentCore;
    const requiredDiamonds = requiredCore * diamondsPerSpin / corePerSpin;

    document.getElementById('result').textContent = `Kamu membutuhkan maksimal ${requiredDiamonds} diamond untuk mendapatkan ${targetCore} Magic Core.`;
}
