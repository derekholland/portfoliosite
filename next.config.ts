import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	typescript: {
		ignoreBuildErrors: true // ❗️Only do this if you're using tsc manually (like above)
	}
};

export default nextConfig;
