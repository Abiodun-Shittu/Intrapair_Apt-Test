import moment from "moment";

const pickupDay = (req, res) => {
	const { pickup_day, recurrence } = req.body;
	const today = moment();
	let pickup_dates = [];
	const validPickupDays = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	if (!validPickupDays.includes(pickup_day)) {
		return res.status(404).json({ message: "Invalid pickup day" });
	}

	let nextPickupDay = today.day(pickup_day);

	if (recurrence === 4 || recurrence === 2 || recurrence === 1) {
		for (let i = 0; i < recurrence; i++) {
			nextPickupDay.add(1, "week");
			pickup_dates.push({
				date: nextPickupDay.format(),
				readable_date: nextPickupDay.format("DD MMMM YYYY"),
			});
		}
	}

	return res.status(200).json({ pickup_dates });
};

export default pickupDay;
