document.addEventListener('DOMContentLoaded', () => {
    function visualize(list) {
        const container = document.getElementById('list-container');
        container.innerHTML = ''; // Clear previous visualization

        let current = list.head;
        while (current) {
            const nodeDiv = document.createElement('div');
            nodeDiv.className = 'node';

            const valueDiv = document.createElement('div');
            valueDiv.className = 'node-value';
            valueDiv.textContent = `Value: ${current.val}`;

            const nextDiv = document.createElement('div');
            nextDiv.className = 'node-next';
            nextDiv.textContent = `Next: ${current.next ? current.next.val : 'null'}`;

            nodeDiv.appendChild(valueDiv);
            nodeDiv.appendChild(nextDiv);

            if (current.next) {
                const arrowDiv = document.createElement('div');
                arrowDiv.className = 'arrow';
                arrowDiv.textContent = '→';
                nodeDiv.appendChild(arrowDiv);
            }

            container.appendChild(nodeDiv);
            current = current.next;
        }
    }


    const list = new SinglyLinkedList();

    

    document.getElementById('add-node-btn').addEventListener('click', function() {
        const inputValue = document.getElementById('node-value').value;
        if (inputValue) {
            list.push(Number(inputValue));
            document.getElementById('node-value').value = ''; 
            visualize(list);
        } else {
            alert('Please enter a valid value!');
        }
    });

    document.getElementById('remove-node-btn').addEventListener('click', function() {
        const poppedNode = list.pop();
        if(!poppedNode){
            alert('List is empty!');
        }
        visualize(list);
    });

    document.getElementById('shift-node-btn').addEventListener('click', function() {
        const shiftedNode = list.shift();
        if(!shiftedNode){
            alert('List is empty!');
        }
        visualize(list);
    })

    document.getElementById('unshift-node-btn').addEventListener('click', function(){
        const inputValue = document.getElementById('node-value').value;
        if (inputValue) {
            list.unshift(Number(inputValue));
            document.getElementById('node-value').value = ''; 
            visualize(list);
        } else {
            alert('Please enter a valid value!');
        }
    })

    document.getElementById('get-node-btn').addEventListener('click', function(){
        const inputValue = document.getElementById('node-value').value;
        if (inputValue) {
            list.get(Number(inputValue));
            document.getElementById('node-value').value = ''; 
            visualize(list);
        } else {
            alert('Please enter a valid value to retrive!');
        }
    })
});