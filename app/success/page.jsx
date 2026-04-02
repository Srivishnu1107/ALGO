'use client'

export const dynamic = 'force-dynamic' // ✅ FIXES BUILD ERROR

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, ShoppingCart, ArrowLeft, ExternalLink } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function SuccessPage() {

  const params = useSearchParams()
  const model = params.get('model')
  const price = params.get('price') || "Free"

  const modelUrl =
    model && model.includes("/")
      ? `https://huggingface.co/${model}`
      : null

  useEffect(() => {
    if (modelUrl) {
      setTimeout(() => {
        window.location.href = modelUrl
      }, 2000)
    }
  }, [modelUrl])

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white px-6 py-10 flex items-center justify-center">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full bg-zinc-900/80 border border-zinc-700 rounded-3xl p-8 shadow-[0_0_60px_-20px_rgba(20,184,166,0.3)]"
      >

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-teal-400 mb-3"
        >
          🚀 Model Ready
        </motion.h1>

        <p className="text-zinc-400 mb-6">
          Redirecting you to HuggingFace...
        </p>

        <div className="bg-zinc-800 rounded-xl p-5 mb-6 border border-zinc-700">
          <p className="text-sm text-zinc-400">Model</p>
          <h2 className="text-lg font-semibold break-all">
            {model || "Unknown Model"}
          </h2>

          <p className="text-sm text-zinc-400 mt-4">Price</p>
          <h3 className="text-teal-400 font-bold text-lg">
            {price === "0" ? "Free" : `₹${price}`}
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href={modelUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 py-3 rounded-xl font-semibold transition"
          >
            <Download size={18} />
            Open Manually
            <ExternalLink size={14} />
          </motion.a>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition"
          >
            <ArrowLeft size={16} />
            Back to Models
          </Link>
        </div>

      </motion.div>
    </div>
  )
}