import React from 'react';
import Image from 'next/image';
import DataTable from '@/components/DataTable';
import Link from 'next/link';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { formatCurrency, formatPercentage, cn } from '@/lib/utils';

// Dummy TrendingCoin dataset with local image assets
const dummyTrendingCoins: TrendingCoin[] = [
  {
    item: {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      market_cap_rank: 1,
      thumb: '/logo.svg',
      large: '/logo.svg',
      data: {
        price: 89113.0,
        price_change_percentage_24h: {
          usd: 2.45,
        },
      },
    },
  },
  {
    item: {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      market_cap_rank: 2,
      thumb: '/logo.svg',
      large: '/logo.svg',
      data: {
        price: 3245.67,
        price_change_percentage_24h: {
          usd: -1.23,
        },
      },
    },
  },
  {
    item: {
      id: 'solana',
      name: 'Solana',
      symbol: 'SOL',
      market_cap_rank: 5,
      thumb: '/logo.svg',
      large: '/logo.svg',
      data: {
        price: 187.42,
        price_change_percentage_24h: {
          usd: 5.67,
        },
      },
    },
  },
  {
    item: {
      id: 'cardano',
      name: 'Cardano',
      symbol: 'ADA',
      market_cap_rank: 8,
      thumb: '/logo.svg',
      large: '/logo.svg',
      data: {
        price: 0.89,
        price_change_percentage_24h: {
          usd: -3.12,
        },
      },
    },
  },
  {
    item: {
      id: 'polkadot',
      name: 'Polkadot',
      symbol: 'DOT',
      market_cap_rank: 12,
      thumb: '/logo.svg',
      large: '/logo.svg',
      data: {
        price: 8.34,
        price_change_percentage_24h: {
          usd: 1.89,
        },
      },
    },
  },
];

const columns: DataTableColumn<TrendingCoin>[] = [
  {
    header: 'Name',
    cell: (coin) => {
      const item = coin.item;

      return (
        <Link href={`/coins/${item.id}`}>
          <Image src={item.large} alt={item.name} width={36} height={36} />
          <p>{item.name}</p>
        </Link>
      );
    },
  },
  {
    header: '24h Change',
    cellClassName: 'change-cell',
    cell: (coin) => {
      const item = coin.item;
      const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;

      return (
        <div
          className={cn(
            'price-change',
            isTrendingUp ? 'text-green-500' : 'text-red-500'
          )}
        >
          <p className='flex items-center'>
            {formatPercentage(item.data.price_change_percentage_24h.usd)}
            {isTrendingUp ? (
              <TrendingUp width={16} height={16} />
            ) : (
              <TrendingDown width={16} height={16} />
            )}
          </p>
        </div>
      );
    },
  },
  {
    header: 'Price',
    cellClassName: 'price-cell',
    cell: (coin) => formatCurrency(coin.item.data.price),
  },
];

const Page = () => {
  return (
    <main className='main-container'>
      <section className='home-grid'>
        <div id='coin-overview'>
          <div className='header pt-2'>
            <Image
              src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png'
              alt='Bitcoin'
              width={56}
              height={56}
            />
            <div className='info'>
              <p>BitCoin / BTC</p>
              <h1>$89,113.00</h1>
            </div>
          </div>
        </div>

        <p>Trending Coins</p>
        <DataTable
          data={dummyTrendingCoins}
          columns={columns}
          rowKey={(coin, index) => coin.item.id || index}
        />
      </section>

      <section className='w-full mt-7 space-y-4'>
        <p>Categories</p>
      </section>
    </main>
  );
};
export default Page;
