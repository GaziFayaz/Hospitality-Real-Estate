const shortListEstate = (shortlistKey, estateId, success, error) => {
	const successMessage = "Added to Shortlist!";
	const errorAlreadyShortlisted = "Estate Already Shortlisted";
	// console.log("shortlist estate")
	const estatesShortlisted = JSON.parse(localStorage.getItem(shortlistKey));
  console.log(estatesShortlisted)

	if (estatesShortlisted) {
		if (!estatesShortlisted.find((estate) => estate === estateId)) {
			localStorage.setItem(
				shortlistKey,
				JSON.stringify([...estatesShortlisted, estateId])
			);
			success(successMessage);
		} else {
			error(errorAlreadyShortlisted);
		}
	} else {
		localStorage.setItem(shortlistKey, JSON.stringify([estateId]));
		success(successMessage);
	}
};

export default shortListEstate;
