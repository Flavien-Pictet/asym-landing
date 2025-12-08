'use client'

import { useState, useEffect } from 'react'
import AdmittedClient from './AdmittedClient'

export default function AdmittedPage() {
  const [imageSets, setImageSets] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('/api/admitted/images')
        const data = await response.json()
        setImageSets(data)
      } catch (error) {
        console.error('Error fetching images:', error)
        setImageSets({ hooks: {}, tips: [], cta: [], tools: {} })
      } finally {
        setLoading(false)
      }
    }
    fetchImages()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  return <AdmittedClient imageSets={imageSets} />
}
