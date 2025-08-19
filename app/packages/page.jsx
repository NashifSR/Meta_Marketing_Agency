import React from 'react'
import PackagesHero from './Components/PackageHero'
import PackagesList from './Components/PackagesList'
import CTA from '../Components/HomeComponents/CTA'
import CustomPackage from './Components/CustomPackage'

const packages = () => {
  return (
    <div>
      <PackagesHero></PackagesHero>
      <PackagesList></PackagesList>
      <CustomPackage></CustomPackage>
    </div>
  )
}

export default packages
