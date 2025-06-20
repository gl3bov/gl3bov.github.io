document.addEventListener('DOMContentLoaded', function() {
    const scene = document.querySelector('a-scene');
    
    // Координаты векторов (можно изменить)
    const vectorA = { x: 2, y: 3, z: 1 };
    const vectorB = { x: -1, y: 4, z: 2 };
    
    // Ждем загрузки сцены
    scene.addEventListener('loaded', function() {
        const marker1 = document.querySelector('#marker1');
        const marker2 = document.querySelector('#marker2');
        const resultMarker = document.querySelector('#result-marker');
        
        // Обновляем текст формул при обнаружении маркеров
        marker1.addEventListener('markerFound', function() {
            const formula1 = document.querySelector('#formula1');
            formula1.setAttribute('text', 'value', `Вектор A:\n(${vectorA.x}, ${vectorA.y}, ${vectorA.z})`);
        });
        
        marker2.addEventListener('markerFound', function() {
            const formula2 = document.querySelector('#formula2');
            formula2.setAttribute('text', 'value', `Вектор B:\n(${vectorB.x}, ${vectorB.y}, ${vectorB.z})`);
        });
        
        // При обнаружении маркера результата вычисляем сумму векторов
        resultMarker.addEventListener('markerFound', function() {
            const result = document.querySelector('#result');
            const sum = {
                x: vectorA.x + vectorB.x,
                y: vectorA.y + vectorB.y,
                z: vectorA.z + vectorB.z
            };
            
            result.setAttribute('text', 'value', `A + B =\n(${sum.x}, ${sum.y}, ${sum.z})`);
            
            // Запускаем анимацию
            const textElement = result.querySelector('a-text');
            textElement.emit('showResult');
            
            // Добавляем дополнительную анимацию
            textElement.setAttribute('animation', {
                property: 'color',
                from: '#ff3366',
                to: '#3366ff',
                dur: 2000,
                loop: true,
                easing: 'easeInOutSine'
            });
        });
    });
});