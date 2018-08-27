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
		return items.find(function(item) {
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

	const findAndToggleChecked = function(id) {
		const itemToCheck = this.findByID(id);
		itemToCheck.checked = !itemToCheck.checked;
	};

	const findAndUpdateName = function(id, newName) {
		try {
			Item.validateName(newName);
			const itemToUpdate = findByID(id);
			itemToUpdate.name = newName;
		} catch(e) {
			console.error(`Cannot update name: ${e.message}`);
		}
	}

	const findAndDelete = function(id) {
		this.items = items.filter(function(item) {
			return item.id !== id;
		});
	};

	const toggleCheckedFilter = function() {
		this.hideCheckedItems = !this.hideCheckedItems;
	}

	const setSearchTerm = function(searchTerm) {
		this.searchTerm = searchTerm;
	}

	return {
		items: items,
		hideCheckedItems: hideCheckedItems,
		searchTerm: searchTerm,
		findByID: findByID,
		addItem: addItem,
		findAndToggleChecked: findAndToggleChecked,
		findAndUpdateName: findAndUpdateName,
		findAndDelete: findAndDelete,
		toggleCheckedFilter,
		setSearchTerm
	};
}());