import { romanQuery } from '@/core/red-query/roman-query.lib'

export class StatisticService {
	#BASE_URL = '/statistics'

	main(onSuccess) {
		return romanQuery({
			path: this.#BASE_URL,
			onSuccess
		})
	}
}
