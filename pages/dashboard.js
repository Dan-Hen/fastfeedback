import { Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import useSWR from 'swr';
import DashboardShell from '../components/DashboardShell';
import EmptyState from '../components/EmptyState';
import SearchBar from '../components/SearchBar';
import { useAuth } from '../lib/auth';
import fetcher from '../utils/fetcher';

const Dashboard = () => {
  const auth = useAuth();
  const { data, ...rest } = useSWR('/api/sites', fetcher);
  const [search, setSearch] = useState('');

  const sites = data?.sites;
  // const sitesNames = sites.map((site) => site.name)

  console.log('sites:', sites);

  if (!auth.user) {
    return 'You can\'t access dashboard if you\'re not logged in';
  }

  if (!sites) {
    return (
      <DashboardShell>
        <EmptyState />
      </DashboardShell>
    );
  }

  console.log('filtered by', search);
  const filteredSites = sites.filter((site) => {
    console.log('site', site);
    const isSiteNameMatch = site.name.toLowerCase().includes(search.toLowerCase());
    const isSiteLinkMatch = site.link.toLowerCase().includes(search.toLowerCase());

    // affiche la liste des sites par default quand la recherche n'est pas utilisée
    if ( search === '' ) {
      return true
    }
    // Je prends mon site.name, je lui applique lowercase
    // includes permet de comparé un substring a la recherche qui a un lowercase appliqué
    return isSiteNameMatch || isSiteLinkMatch;
    // name = a link = b     (a) || (b) === search
  });

  return (
    <DashboardShell>
      <SearchBar
        onSearchInputChange={(search) => setSearch(search)}
      />
      {
        filteredSites.map((site) =>
          <Flex
            bg="gray.300"
            mb={'5px'}
            p={5}
            borderRadius={5}
          >
            <Text mr={5}>
              {site.name}
            </Text>
            <span>
            {site.link}
            </span>
          </Flex>,
        )
      }
    </DashboardShell>
  );
};

export default Dashboard;
