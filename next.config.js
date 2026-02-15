import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactCompiler: false,
    allowedDevOrigins: ["172.20.10.3"],
}

export default withPayload(nextConfig) 
