const store = (function() {
	let items= [
		{ id: cuid(), name: 'apples', checked: false },
		{ id: cuid(), name: 'oranges', checked: false },
		{ id: cuid(), name: 'milk', checked: true },
		{ id: cuid(), name: 'bread', checked: false }
	];
	let hideCheckedItems= false;
	let searchTerm= '';
    
	const findByID = function(id) {
		items.find(function(item) {
			return item.id === id;
		});
	};
    
	const addItem= function(name) {
		try {
			Item.validateName(name);
			const newItem = Item.create(name);
			items.push(newItem);
		} catch(e) {
			console.error(`Could not add item, ${e.message}, name not valid`);
		}
	};

	const findAndToggleChecked = function(id, newName) {
		try {
			Item.validateName(newName);
			const itemToCheck = findByID(id);
			itemToCheck.name = newName;
		} catch(e) {
			console.error(`Cannot update name, ${e.message}`);
		}
	};

	const findAndDelete = function(id) {
		this.items = this.items.filter(function(item) {
			return item.id !== id;
		});
		console.log(items);
	};

	return {
		items: items,
		hideCheckedItems: hideCheckedItems,
		searchTerm: searchTerm,
		findByID: findByID,
		addItem: addItem,
		findAndToggleChecked: findAndToggleChecked,
		findAndDelete: findAndDelete,
	};
}());