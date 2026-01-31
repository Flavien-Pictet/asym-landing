'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import AgreementForm from '@/lib/components/AgreementForm'
import { getAppConfig, getContractConfig } from '@/lib/appsConfig'

function TallerAgreementContent() {
	const searchParams = useSearchParams()
	const contractType = searchParams.get('type') || 'default'

	const appConfig = getAppConfig('taller')
	const contract = getContractConfig('taller', contractType)

	if (!appConfig || !contract) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-gray-900">Configuration Error</h1>
					<p className="text-gray-600 mt-2">Unable to load app configuration.</p>
				</div>
			</div>
		)
	}

	return <AgreementForm appConfig={appConfig} contract={contract} />
}

export default function TallerAgreementPage() {
	return (
		<Suspense fallback={
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
			</div>
		}>
			<TallerAgreementContent />
		</Suspense>
	)
}
