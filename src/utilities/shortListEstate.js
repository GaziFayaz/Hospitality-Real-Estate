const shortListEstate = (shortlistKey, user, estateId, success, error) => {
	const successMessage = "Added to Shortlist!";
	const errorAlreadyShortlisted = "Estate Already Shortlisted";
	// console.log("shortlist estate")
	const estatesShortlisted = JSON.parse(localStorage.getItem(shortlistKey));
	console.log(estatesShortlisted);

	if (estatesShortlisted) {
		if (estatesShortlisted[user.uid]) {
			if (!estatesShortlisted[user.uid].find((estate) => estate === estateId)) {
				localStorage.setItem(
					shortlistKey,
					JSON.stringify({...estatesShortlisted, [user.uid]: [...estatesShortlisted[user.uid], estateId]})
				);
				success(successMessage);
			} else {
				error(errorAlreadyShortlisted);
			}
		}
	} else {
		localStorage.setItem(shortlistKey, JSON.stringify({[user.uid]: [estateId]}));
		success(successMessage);
	}
};

export default shortListEstate;
