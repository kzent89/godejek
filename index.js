import fetch from "node-fetch"
import chalk from "chalk"
import fs from "fs"
import moment from "moment"
import readlineSync from "readline-sync"

const iamAccessToken =
  "CAESiQUStwQIAhC7mN2VBRqsBBcACEbLixjoV0VVR9gLOnHjVYUgktbM44XQFiDWMJPuSciP9ijhwErmBw841lQwvyi5NkG2pZN8xJbDRfrc9XKMsDLalZzJ4r0aaqiV_CdmQJo8se7AuiOMvA5-c4SerjfS2oLC6bFQKLkb5u1v6yTSPm06PauPeiYnP8ADpst7mBtB9L-Oflb1hII2u-PvRXdUFzXudEvencDVnyta2zwnWIr6BvaxdZn9LJJPAjMWzCvbR96ysC0_jWFK6uF5r232Omw3ElYZeXbflhrZcgWw4Vq0_qr_ez1eJYS1lJ7tCkDzYVQa3Z_u9JJeEfq_Bsm44vEIYyj7mhYGNIkQkROhMf7ow2GF8N-9Jai_idXQ9iZLV4xQmnMh05sCe7evzmyXQmRTTZ4Cj9wGwrAVh5Xk0NR-2zOvj6nfA_nRZZKhxCDGTSIgx-ow1AhXQ_zfN-5JFpsdRXCvHYh_DTB-FVgxiPBSu4HuX4Wr-lusXcBMjvu09DzYRRy2hmpbGqpWwHNVWZiQS6NH6JaWJNgf-YfRriUOud-0q1H9uG1FewMHM52Y0yC-8AlfRTOoyXFzEIMUfV0Ryg5OEwLT1zp9O8n-RXOgG15VqtHxhZHn-yAlKcJCAUG35NzrC1dSC4IWIpXE6WtPVIAlYO7C2ykLqKLVxF5H2IgUGt-6EK85bBUM_LHLEHJus0_KjFc-aJnZmi-eFvHlrflYTHiV0_AHwPx0OqBlVYlASUtDQIAaQFUSagYZj29tSeUtlwP91MdVREHk__dx9tUx0TFsjIaOSdYiqvTJyV78j-3SccA3ap1IWL3_O3OCQUfUuihTwQ4gAioBBTDcwZHwBDgB"

// const headers =

const getHotelList = (
  country = "pakistan",
  destId = 161,
  page = 1,
  offset = 0,
  checkInDate,
  checkOutDate
) =>
  new Promise((resolve, reject) => {
    fetch(
      "https://mobile-apps.booking.com/json/mobile.dml?affiliate_id=332731&currency_code=IDR&device_id=081b7f6b-0bd8-4275-8f9b-43405df0a9e4&languagecode=en-us&network_type=wifi&user_latitude=-6.554053299821086&user_longitude=106.76799774000563&user_os=11&user_version=39.4-android",
      {
        method: "POST",
        headers: {
          authority: "www.booking.com",
          accept: "*/*",
          "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
          "content-type": "application/json",
          origin: "https://www.booking.com",
          referer: "https://www.booking.com/",
          "sec-ch-ua":
            '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
          "x-booking-context-action-name": "searchresults_irene",
          "x-booking-context-aid": "304142",
          "x-booking-pageview-id": "d1a0809c593800ad",
          "x-booking-site-type-id": "1",
          Authorization: "Basic dGhlc2FpbnRzYnY6ZGdDVnlhcXZCeGdN",
        },
        body: JSON.stringify({
          operationName: "FullSearch",
          variables: {
            input: {
              acidCarouselContext: null,
              childrenAges: [],
              doAvailabilityCheck: false,
              enableCampaigns: true,
              filters: {},
              flexWindow: 3,
              forcedBlocks: null,
              dates: {
                checkin: checkInDate,
                checkout: checkOutDate,
              },
              location: {
                searchString: country,
                destType: "COUNTRY",
                destId: destId,
              },
              metaContext: {
                metaCampaignId: 0,
                externalTotalPrice: null,
                feedPrice: null,
                rateRuleId: null,
                dragongateTraceId: null,
              },
              nbRooms: 1,
              nbAdults: 2,
              nbChildren: 0,
              showAparthotelAsHotel: true,
              needsRoomsMatch: false,
              optionalFeatures: {
                forceArpExperiments: true,
                testProperties: false,
              },
              pagination: {
                rowsPerPage: page,
                offset: offset,
              },
              referrerBlock: {
                clickPosition: 0,
                clickType: "b",
                blockName: "autocomplete",
              },
              sbCalendarOpen: true,
              sorters: {
                selectedSorter: "class",
                referenceGeoId: null,
                tripTypeIntentId: null,
              },
              travelPurpose: 2,
              seoThemeIds: [],
              useSearchParamsFromSession: true,
            },
            geniusVipUI: {
              enableEnroll: true,
              page: "SEARCH_RESULTS",
            },
          },
          extensions: {},
          query:
            "query FullSearch($input: SearchQueryInput!, $geniusVipUI: GeniusVipUIsInput) {\n  searchQueries {\n    search(input: $input) {\n      ...FullSearchFragment\n      __typename\n    }\n    __typename\n  }\n  geniusVipEnrolledProgram(input: $geniusVipUI) {\n    ...geniusVipEnrolledProgram\n    __typename\n  }\n}\n\nfragment FullSearchFragment on SearchQueryOutput {\n  banners {\n    ...Banner\n    __typename\n  }\n  breadcrumbs {\n    ... on SearchResultsBreadcrumb {\n      ...SearchResultsBreadcrumb\n      __typename\n    }\n    ... on LandingPageBreadcrumb {\n      ...LandingPageBreadcrumb\n      __typename\n    }\n    __typename\n  }\n  carousels {\n    ...Carousel\n    __typename\n  }\n  destinationLocation {\n    ...DestinationLocation\n    __typename\n  }\n  entireHomesSearchEnabled\n  dateFlexibilityOptions {\n    enabled\n    __typename\n  }\n  filters {\n    ...FilterData\n    __typename\n  }\n  appliedFilterOptions {\n    ...FilterOption\n    __typename\n  }\n  recommendedFilterOptions {\n    ...FilterOption\n    __typename\n  }\n  pagination {\n    nbResultsPerPage\n    nbResultsTotal\n    __typename\n  }\n  tripTypes {\n    ...TripTypesData\n    __typename\n  }\n  results {\n    ...BasicPropertyData\n    ...MatchingUnitConfigurations\n    ...PropertyBlocks\n    ...BookerExperienceData\n    priceDisplayInfoIrene {\n      ...PriceDisplayInfoIrene\n      __typename\n    }\n    licenseDetails {\n      nextToHotelName\n      __typename\n    }\n    inferredLocationScore\n    trackOnView {\n      experimentTag\n      __typename\n    }\n    topPhotos {\n      highResUrl {\n        relativeUrl\n        __typename\n      }\n      lowResUrl {\n        relativeUrl\n        __typename\n      }\n      highResJpegUrl {\n        relativeUrl\n        __typename\n      }\n      lowResJpegUrl {\n        relativeUrl\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  searchMeta {\n    ...SearchMetadata\n    __typename\n  }\n  sorters {\n    option {\n      ...SorterFields\n      __typename\n    }\n    __typename\n  }\n  oneOfThreeDeal {\n    ...OneOfThreeDeal\n    __typename\n  }\n  zeroResultsSection {\n    ...ZeroResultsSection\n    __typename\n  }\n  rocketmilesSearchUuid\n  previousSearches {\n    ...PreviousSearches\n    __typename\n  }\n  frontierThemes {\n    ...FrontierThemes\n    __typename\n  }\n  __typename\n}\n\nfragment BasicPropertyData on SearchResultProperty {\n  acceptsWalletCredit\n  basicPropertyData {\n    accommodationTypeId\n    id\n    isTestProperty\n    location {\n      address\n      city\n      countryCode\n      __typename\n    }\n    pageName\n    ufi\n    photos {\n      main {\n        highResUrl {\n          relativeUrl\n          __typename\n        }\n        lowResUrl {\n          relativeUrl\n          __typename\n        }\n        highResJpegUrl {\n          relativeUrl\n          __typename\n        }\n        lowResJpegUrl {\n          relativeUrl\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    reviewScore: reviews {\n      score: totalScore\n      reviewCount: reviewsCount\n      totalScoreTextTag {\n        translation\n        __typename\n      }\n      showScore\n      secondaryScore\n      secondaryTextTag {\n        translation\n        __typename\n      }\n      showSecondaryScore\n      __typename\n    }\n    externalReviewScore: externalReviews {\n      score: totalScore\n      reviewCount: reviewsCount\n      showScore\n      totalScoreTextTag {\n        translation\n        __typename\n      }\n      __typename\n    }\n    alternativeExternalReviewsScore: alternativeExternalReviews {\n      score: totalScore\n      reviewCount: reviewsCount\n      showScore\n      totalScoreTextTag {\n        translation\n        __typename\n      }\n      __typename\n    }\n    starRating {\n      value\n      symbol\n      caption {\n        translation\n        __typename\n      }\n      tocLink {\n        translation\n        __typename\n      }\n      showAdditionalInfoIcon\n      __typename\n    }\n    isClosed\n    paymentConfig {\n      installments {\n        minPriceFormatted\n        maxAcceptCount\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  badges {\n    caption {\n      translation\n      __typename\n    }\n    closedFacilities {\n      startDate\n      endDate\n      __typename\n    }\n    __typename\n  }\n  customBadges {\n    showIsWorkFriendly\n    showParkAndFly\n    showSkiToDoor\n    showBhTravelCreditBadge\n    showOnlineCheckinBadge\n    __typename\n  }\n  description {\n    text\n    __typename\n  }\n  displayName {\n    text\n    translationTag {\n      translation\n      __typename\n    }\n    __typename\n  }\n  geniusInfo {\n    benefitsCommunication {\n      header {\n        title\n        __typename\n      }\n      items {\n        title\n        __typename\n      }\n      __typename\n    }\n    geniusBenefits\n    geniusBenefitsData {\n      hotelCardHasFreeBreakfast\n      hotelCardHasFreeRoomUpgrade\n      sortedBenefits\n      __typename\n    }\n    showGeniusRateBadge\n    __typename\n  }\n  isInCompanyBudget\n  location {\n    displayLocation\n    mainDistance\n    publicTransportDistanceDescription\n    skiLiftDistance\n    beachDistance\n    nearbyBeachNames\n    beachWalkingTime\n    geoDistanceMeters\n    __typename\n  }\n  mealPlanIncluded {\n    mealPlanType\n    text\n    __typename\n  }\n  persuasion {\n    autoextended\n    geniusRateAvailable\n    highlighted\n    preferred\n    preferredPlus\n    showNativeAdLabel\n    nativeAdId\n    nativeAdsCpc\n    nativeAdsTracking\n    bookedXTimesMessage\n    sponsoredAdsData {\n      isDsaCompliant\n      legalEntityName\n      sponsoredAdsDesign\n      __typename\n    }\n    __typename\n  }\n  policies {\n    showFreeCancellation\n    showNoPrepayment\n    enableJapaneseUsersSpecialCase\n    __typename\n  }\n  ribbon {\n    ribbonType\n    text\n    __typename\n  }\n  recommendedDate {\n    checkin\n    checkout\n    lengthOfStay\n    __typename\n  }\n  showGeniusLoginMessage\n  showPrivateHostMessage\n  soldOutInfo {\n    isSoldOut\n    messages {\n      text\n      __typename\n    }\n    alternativeDatesMessages {\n      text\n      __typename\n    }\n    __typename\n  }\n  nbWishlists\n  visibilityBoosterEnabled\n  showAdLabel\n  isNewlyOpened\n  propertySustainability {\n    isSustainable\n    tier {\n      type\n      __typename\n    }\n    facilities {\n      id\n      __typename\n    }\n    certifications {\n      name\n      __typename\n    }\n    chainProgrammes {\n      chainName\n      programmeName\n      __typename\n    }\n    levelId\n    __typename\n  }\n  seoThemes {\n    caption\n    __typename\n  }\n  relocationMode {\n    distanceToCityCenterKm\n    distanceToCityCenterMiles\n    distanceToOriginalHotelKm\n    distanceToOriginalHotelMiles\n    phoneNumber\n    __typename\n  }\n  bundleRatesAvailable\n  recommendedDatesLabel\n  __typename\n}\n\nfragment Banner on Banner {\n  name\n  type\n  isDismissible\n  showAfterDismissedDuration\n  position\n  requestAlternativeDates\n  title {\n    text\n    __typename\n  }\n  imageUrl\n  paragraphs {\n    text\n    __typename\n  }\n  metadata {\n    key\n    value\n    __typename\n  }\n  pendingReviewInfo {\n    propertyPhoto {\n      lowResUrl {\n        relativeUrl\n        __typename\n      }\n      lowResJpegUrl {\n        relativeUrl\n        __typename\n      }\n      __typename\n    }\n    propertyName\n    urlAccessCode\n    __typename\n  }\n  nbDeals\n  primaryAction {\n    text {\n      text\n      __typename\n    }\n    action {\n      name\n      context {\n        key\n        value\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  secondaryAction {\n    text {\n      text\n      __typename\n    }\n    action {\n      name\n      context {\n        key\n        value\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  iconName\n  flexibleFilterOptions {\n    optionId\n    filterName\n    __typename\n  }\n  trackOnView {\n    type\n    experimentHash\n    value\n    __typename\n  }\n  dateFlexQueryOptions {\n    text {\n      text\n      __typename\n    }\n    action {\n      name\n      context {\n        key\n        value\n        __typename\n      }\n      __typename\n    }\n    isApplied\n    __typename\n  }\n  __typename\n}\n\nfragment Carousel on Carousel {\n  aggregatedCountsByFilterId\n  carouselId\n  position\n  contentType\n  hotelId\n  name\n  soldoutProperties\n  priority\n  themeId\n  title {\n    text\n    __typename\n  }\n  slides {\n    captionText {\n      text\n      __typename\n    }\n    name\n    photoUrl\n    subtitle {\n      text\n      __typename\n    }\n    type\n    title {\n      text\n      __typename\n    }\n    action {\n      context {\n        key\n        value\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment DestinationLocation on DestinationLocation {\n  name {\n    text\n    __typename\n  }\n  inName {\n    text\n    __typename\n  }\n  countryCode\n  __typename\n}\n\nfragment FilterData on Filter {\n  trackOnView {\n    type\n    experimentHash\n    value\n    __typename\n  }\n  trackOnClick {\n    type\n    experimentHash\n    value\n    __typename\n  }\n  name\n  field\n  category\n  filterStyle\n  title {\n    text\n    translationTag {\n      translation\n      __typename\n    }\n    __typename\n  }\n  subtitle\n  options {\n    trackOnView {\n      type\n      experimentHash\n      value\n      __typename\n    }\n    trackOnClick {\n      type\n      experimentHash\n      value\n      __typename\n    }\n    trackOnSelect {\n      type\n      experimentHash\n      value\n      __typename\n    }\n    trackOnDeSelect {\n      type\n      experimentHash\n      value\n      __typename\n    }\n    trackOnViewPopular {\n      type\n      experimentHash\n      value\n      __typename\n    }\n    trackOnClickPopular {\n      type\n      experimentHash\n      value\n      __typename\n    }\n    trackOnSelectPopular {\n      type\n      experimentHash\n      value\n      __typename\n    }\n    trackOnDeSelectPopular {\n      type\n      experimentHash\n      value\n      __typename\n    }\n    ...FilterOption\n    __typename\n  }\n  filterLayout {\n    isCollapsable\n    collapsedCount\n    __typename\n  }\n  stepperOptions {\n    min\n    max\n    default\n    selected\n    title {\n      text\n      translationTag {\n        translation\n        __typename\n      }\n      __typename\n    }\n    field\n    labels {\n      text\n      translationTag {\n        translation\n        __typename\n      }\n      __typename\n    }\n    trackOnView {\n      type\n      experimentHash\n      value\n      __typename\n    }\n    trackOnClick {\n      type\n      experimentHash\n      value\n      __typename\n    }\n    trackOnSelect {\n      type\n      experimentHash\n      value\n      __typename\n    }\n    trackOnDeSelect {\n      type\n      experimentHash\n      value\n      __typename\n    }\n    trackOnClickDecrease {\n      type\n      experimentHash\n      value\n      __typename\n    }\n    trackOnClickIncrease {\n      type\n      experimentHash\n      value\n      __typename\n    }\n    trackOnDecrease {\n      type\n      experimentHash\n      value\n      __typename\n    }\n    trackOnIncrease {\n      type\n      experimentHash\n      value\n      __typename\n    }\n    __typename\n  }\n  sliderOptions {\n    min\n    max\n    minSelected\n    maxSelected\n    minPriceStep\n    minSelectedFormatted\n    currency\n    histogram\n    selectedRange {\n      translation\n      __typename\n    }\n    title\n    __typename\n  }\n  sliderOptionsPerStay {\n    min\n    max\n    minSelected\n    maxSelected\n    minPriceStep\n    minSelectedFormatted\n    currency\n    histogram\n    selectedRange {\n      translation\n      __typename\n    }\n    title\n    __typename\n  }\n  __typename\n}\n\nfragment FilterOption on Option {\n  optionId: id\n  count\n  selected\n  urlId\n  additionalLabel {\n    text\n    translationTag {\n      translation\n      __typename\n    }\n    __typename\n  }\n  value {\n    text\n    translationTag {\n      translation\n      __typename\n    }\n    __typename\n  }\n  starRating {\n    value\n    symbol\n    caption {\n      translation\n      __typename\n    }\n    showAdditionalInfoIcon\n    __typename\n  }\n  __typename\n}\n\nfragment LandingPageBreadcrumb on LandingPageBreadcrumb {\n  destType\n  name\n  urlParts\n  __typename\n}\n\nfragment MatchingUnitConfigurations on SearchResultProperty {\n  matchingUnitConfigurations {\n    commonConfiguration {\n      name\n      unitId\n      bedConfigurations {\n        beds {\n          count\n          type\n          __typename\n        }\n        nbAllBeds\n        __typename\n      }\n      nbAllBeds\n      nbBathrooms\n      nbBedrooms\n      nbKitchens\n      nbLivingrooms\n      nbPools\n      nbUnits\n      unitTypeNames {\n        translation\n        __typename\n      }\n      localizedArea {\n        localizedArea\n        unit\n        __typename\n      }\n      __typename\n    }\n    unitConfigurations {\n      name\n      unitId\n      bedConfigurations {\n        beds {\n          count\n          type\n          __typename\n        }\n        nbAllBeds\n        __typename\n      }\n      apartmentRooms {\n        config {\n          roomId: id\n          roomType\n          bedTypeId\n          bedCount: count\n          __typename\n        }\n        roomName: tag {\n          tag\n          translation\n          __typename\n        }\n        __typename\n      }\n      nbAllBeds\n      nbBathrooms\n      nbBedrooms\n      nbKitchens\n      nbLivingrooms\n      nbPools\n      nbUnits\n      unitTypeNames {\n        translation\n        __typename\n      }\n      localizedArea {\n        localizedArea\n        unit\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment PropertyBlocks on SearchResultProperty {\n  blocks {\n    blockId {\n      roomId\n      occupancy\n      policyGroupId\n      packageId\n      mealPlanId\n      __typename\n    }\n    finalPrice {\n      amount\n      currency\n      __typename\n    }\n    originalPrice {\n      amount\n      currency\n      __typename\n    }\n    onlyXLeftMessage {\n      tag\n      variables {\n        key\n        value\n        __typename\n      }\n      translation\n      __typename\n    }\n    freeCancellationUntil\n    hasCrib\n    blockMatchTags {\n      childStaysForFree\n      __typename\n    }\n    thirdPartyInventoryContext {\n      isTpiBlock\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment PriceDisplayInfoIrene on PriceDisplayInfoIrene {\n  badges {\n    name {\n      translation\n      __typename\n    }\n    tooltip {\n      translation\n      __typename\n    }\n    style\n    identifier\n    __typename\n  }\n  chargesInfo {\n    translation\n    __typename\n  }\n  displayPrice {\n    copy {\n      translation\n      __typename\n    }\n    amountPerStay {\n      amount\n      amountRounded\n      amountUnformatted\n      currency\n      __typename\n    }\n    __typename\n  }\n  priceBeforeDiscount {\n    copy {\n      translation\n      __typename\n    }\n    amountPerStay {\n      amount\n      amountRounded\n      amountUnformatted\n      currency\n      __typename\n    }\n    __typename\n  }\n  rewards {\n    rewardsList {\n      termsAndConditions\n      amountPerStay {\n        amount\n        amountRounded\n        amountUnformatted\n        currency\n        __typename\n      }\n      breakdown {\n        productType\n        amountPerStay {\n          amount\n          amountRounded\n          amountUnformatted\n          currency\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    rewardsAggregated {\n      amountPerStay {\n        amount\n        amountRounded\n        amountUnformatted\n        currency\n        __typename\n      }\n      copy {\n        translation\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  useRoundedAmount\n  discounts {\n    amount {\n      amount\n      amountRounded\n      amountUnformatted\n      currency\n      __typename\n    }\n    name {\n      translation\n      __typename\n    }\n    description {\n      translation\n      __typename\n    }\n    itemType\n    productId\n    __typename\n  }\n  excludedCharges {\n    excludeChargesAggregated {\n      copy {\n        translation\n        __typename\n      }\n      amountPerStay {\n        amount\n        amountRounded\n        amountUnformatted\n        currency\n        __typename\n      }\n      __typename\n    }\n    excludeChargesList {\n      chargeMode\n      chargeInclusion\n      chargeType\n      amountPerStay {\n        amount\n        amountRounded\n        amountUnformatted\n        currency\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  taxExceptions {\n    shortDescription {\n      translation\n      __typename\n    }\n    longDescription {\n      translation\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment BookerExperienceData on SearchResultProperty {\n  bookerExperienceContentUIComponentProps {\n    ... on BookerExperienceContentLoyaltyBadgeListProps {\n      badges {\n        variant\n        key\n        title\n        popover\n        logoSrc\n        logoAlt\n        __typename\n      }\n      __typename\n    }\n    ... on BookerExperienceContentFinancialBadgeProps {\n      paymentMethod\n      backgroundColor\n      hideAccepted\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment SearchMetadata on SearchMeta {\n  availabilityInfo {\n    hasLowAvailability\n    unavailabilityPercent\n    totalAvailableNotAutoextended\n    __typename\n  }\n  boundingBoxes {\n    swLat\n    swLon\n    neLat\n    neLon\n    type\n    __typename\n  }\n  childrenAges\n  dates {\n    checkin\n    checkout\n    lengthOfStayInDays\n    __typename\n  }\n  destId\n  destType\n  maxLengthOfStayInDays\n  nbRooms\n  nbAdults\n  nbChildren\n  userHasSelectedFilters\n  customerValueStatus\n  affiliatePartnerChannelId\n  affiliateVerticalType\n  affiliateName\n  __typename\n}\n\nfragment SearchResultsBreadcrumb on SearchResultsBreadcrumb {\n  destId\n  destType\n  name\n  __typename\n}\n\nfragment SorterFields on SorterOption {\n  type: name\n  captionTranslationTag {\n    translation\n    __typename\n  }\n  tooltipTranslationTag {\n    translation\n    __typename\n  }\n  isSelected: selected\n  __typename\n}\n\nfragment OneOfThreeDeal on OneOfThreeDeal {\n  id\n  uuid\n  winnerHotelId\n  winnerBlockId\n  priceDisplayInfo {\n    displayPrice {\n      amountPerStay {\n        amountRounded\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  locationInfo {\n    name\n    inName\n    destType\n    __typename\n  }\n  destinationType\n  commonFacilities {\n    id\n    name\n    __typename\n  }\n  tpiParams {\n    wholesalerCode\n    rateKey\n    rateBlockId\n    bookingRoomId\n    supplierId\n    __typename\n  }\n  properties {\n    priceDisplayInfo {\n      priceBeforeDiscount {\n        amountPerStay {\n          amountRounded\n          __typename\n        }\n        __typename\n      }\n      displayPrice {\n        amountPerStay {\n          amountRounded\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    basicPropertyData {\n      id\n      name\n      pageName\n      photos {\n        main {\n          highResUrl {\n            absoluteUrl\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      location {\n        address\n        countryCode\n        __typename\n      }\n      reviews {\n        reviewsCount\n        totalScore\n        __typename\n      }\n      __typename\n    }\n    blocks {\n      thirdPartyInventoryContext {\n        rateBlockId\n        rateKey\n        wholesalerCode\n        tpiRoom {\n          bookingRoomId\n          __typename\n        }\n        supplierId\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment TripTypesData on TripTypes {\n  beach {\n    isBeachUfi\n    isEnabledBeachUfi\n    isCoastalBeachRegion\n    isBeachDestinationWithoutBeach\n    __typename\n  }\n  ski {\n    isSkiExperience\n    isSkiScaleUfi\n    __typename\n  }\n  carouselBeach {\n    name\n    beachId\n    photoUrl\n    reviewScore\n    reviewScoreFormatted\n    translatedBeachActivities\n    translatedSandType\n    __typename\n  }\n  skiLandmarkData {\n    resortId\n    slopeTotalLengthFormatted\n    totalLiftsCount\n    __typename\n  }\n  __typename\n}\n\nfragment ZeroResultsSection on ZeroResultsSection {\n  title {\n    text\n    __typename\n  }\n  primaryAction {\n    text {\n      text\n      __typename\n    }\n    action {\n      name\n      __typename\n    }\n    __typename\n  }\n  paragraphs {\n    text\n    __typename\n  }\n  type\n  __typename\n}\n\nfragment PreviousSearches on PreviousSearch {\n  childrenAges\n  __typename\n}\n\nfragment FrontierThemes on FrontierTheme {\n  id\n  name\n  selected\n  __typename\n}\n\nfragment geniusVipEnrolledProgram on GeniusVipEnrolledProgram {\n  metadata {\n    programType\n    __typename\n  }\n  geniusVipUIs {\n    searchResultModal {\n      title {\n        text\n        __typename\n      }\n      subtitle {\n        text\n        __typename\n      }\n      modalCategory\n      asset {\n        __typename\n        ... on Image {\n          url\n          __typename\n        }\n      }\n      cta {\n        text\n        actionString\n        actionDismiss\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n",
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  })

const getDetailHotel = (hotelId, checkInDate, checkOutDate) =>
  new Promise((resolve, reject) => {
    fetch(
      `https://mobile-apps.booking.com/json/mobile.hotelPage?include_bsb_info=1&sort_by=auto&pod_separate_policies_from_title=1&check_excluded_charge_or_tax=1&include_genius_benefits_per_placement=1&use_direct_payment=1&include_num_ceb_available=1&languagecode=en-us&ios_img_increase=1&arrival_date=${checkInDate}&include_excluded_charges_detail=1&show_if_rare_find=1&include_zip_required=1&show_if_domestic_rate=2&include_popular_facilities=1&include_free_facilities=1&include_ufi_room_size_average=1&ranking_position=0&apass_opt_in=1&include_child_policies_text=1&device_id=081b7f6b-0bd8-4275-8f9b-43405df0a9e4&new_sustainability=1&include_composite_breakdown=1&include_genius_benefits_list=1&include_rtb=1&show_full_mealplan_description=1&block_ids=1013771001_375379542_0_42_0&include_highlight_strip=1&rec_version=2&include_breakfast_msg=1&affiliate_id=332731&include_important_info_with_codes=1&cur_page=hp&is_personalisation_disabled=0&show_house_rules_bp=1&include_property_highlight_strip=1&include_bh_room_highlights=1&add_inclusion=1&user_version=39.4-android&hotel_id=${hotelId}&show_genius_free_room_upgrade=0&include_decoupling_keys=1&user_longitude=106.7679977400056&search_id=15c4d76e421692987035136135a6fbd2430%3A1%3A202&include_temporarily_closed_facilities=1&include_keycollection_info=1&correct_cpv2=1&add_has_open_booking_flag=1&include_is_block_fit=1&get_rare_find_state=1&include_bwallet_room_eligibility=1&upsort_refundable_ml=1&departure_date=${checkOutDate}&facility_info_format=1&user_os=11&include_has_theme_park_benefits=1&show_hotel_genius_status=1&get_photo_for_room_facilities=1&show_min_stay=1&logged_out_genius=1&include_city_in_trans=1&show_occupancy_for_price=1&include_cancellation_special_condition=1&include_facility_type=1&include_bsb_offer=1&include_transparency_reinforcement=1&rec_guest_qty=2&include_paymentterms=1&change_struct_rooms=1&include_cancellation_timeline=1&network_type=wifi&units=metric&user_latitude=-6.554053299821086&include_bed_prices_in_user_currency=1&include_cpv2_for_room=1&show_genius_free_breakfast=0&include_prepayment_timeline=1&include_tax_exception=1&include_contact_host_check=1&dotd=2&upsort_view_highlight=1&include_nr_bedrooms=1&ga_enhanced_ecommerce_tracking=1&currency_code=IDR&include_occupancy_regulation_copy=1&use_new_image_service=1&add_genius_percentage_value=1&include_rl_use_block_filter=1&include_sustainability=1&include_missing_survey_check=1&show_if_no_cc_allowed=2&rec_room_qty=5&include_extra_for_child=1&include_genius_badge=1&include_is_mostly_soldout=1&flex2nonref=1&show_lift_highlight=1&include_badges_in_price_breakdown=1&include_apt_config=1&show_checkin_instructions=1&hotelpage_handle_soldout_cases=1&change_copy_for_private_bathroom=1&include_nr_bookings_today=1`,
      {
        headers: {
          Host: "mobile-apps.booking.com",
          Authorization: "Basic dGhlc2FpbnRzYnY6ZGdDVnlhcXZCeGdN",
          "X-Booking-Api-Version": "1",
          "Accept-Language": "en-us",
          "Accept-Encoding": "gzip, deflate",
          "X-Auth-Token": "8004c5fc44b20423c3f0b73232f67119442610f0",
          "X-Apollo-Operation-Id":
            "7e623a1d23f2b2f0e792060013c8b76909536c9dcea5e7ab990879d06a4b9830",
          "X-Apollo-Operation-Name": "WalletBalance",
          "X-Booking-Iam-Access-Token": iamAccessToken,
          "X-Access-Token": iamAccessToken,
          "User-Agent":
            "Booking.App/39.4 Android/11; Type: mobile; AppStore: google; Brand: Google; Model: Pixel",
          "X-Library": "okhttp+network-api",
          "X-Px-Authorization": "1",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  })

const getUserProfile = () => {
  return new Promise((resolve, reject) => {
    return fetch(
      "https://mobile-apps.booking.com/json/mobile.wallet?page_size=-1&currency_code=HOTEL&txns=1&user_os=11&user_version=39.4-android&device_id=081b7f6b-0bd8-4275-8f9b-43405df0a9e4&network_type=wifi&languagecode=en-us&display=normal_xxhdpi&affiliate_id=337862",
      {
        method: "GET",
        headers: {
          Host: "mobile-apps.booking.com",
          Authorization: "Basic dGhlc2FpbnRzYnY6ZGdDVnlhcXZCeGdN",
          "X-Booking-Api-Version": "1",
          "Accept-Language": "en-us",
          "Accept-Encoding": "gzip, deflate",
          "X-Auth-Token": "8004c5fc44b20423c3f0b73232f67119442610f0",
          "X-Apollo-Operation-Id":
            "7e623a1d23f2b2f0e792060013c8b76909536c9dcea5e7ab990879d06a4b9830",
          "X-Apollo-Operation-Name": "WalletBalance",
          "X-Booking-Iam-Access-Token": iamAccessToken,
          "X-Access-Token": iamAccessToken,
          "User-Agent":
            "Booking.App/39.4 Android/11; Type: mobile; AppStore: google; Brand: Google; Model: Pixel",
          "X-Library": "okhttp+network-api",
          "X-Px-Authorization": "1",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  })
}

const getAccomodationLocation = (query) =>
  new Promise((resolve, reject) => {
    fetch("https://accommodations.booking.com/autocomplete.json", {
      method: "POST",
      headers: {
        authority: "accommodations.booking.com",
        accept: "*/*",
        "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
        "content-type": "text/plain;charset=UTF-8",
        origin: "https://www.booking.com",
        referer: "https://www.booking.com/",
        "sec-ch-ua":
          '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
      },
      body: `{"query":"${query}"}`,
    })
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  })

;(async () => {
  console.clear()

  const hotelLocation = readlineSync.question("Masukan lokasi hotel : ")
  const minreward = readlineSync.question("Masukan minimal reward : ")

  const accomodationResult = await getAccomodationLocation(hotelLocation)
  if (accomodationResult.results.length < 1) {
    console.log(chalk.red("Lokasi Tidak ditemukan!"))
    process.exit(0)
  }

  const checkInDate = moment().add(3, "d").format("YYYY-MM-DD")
  const checkOutDate = moment(checkInDate).add(2, "d").format("YYYY-MM-DD")

  const userprofile = await getUserProfile()
  // console.log(userprofile)
  if (userprofile?.b_bookingpay_user_info) {
    console.log(``)
    console.log(
      `Anda login sebagai ${userprofile.b_bookingpay_user_info.email} (${
        userprofile?.b_bookingpay_cash_balance_detailed?.length
          ? userprofile?.b_bookingpay_cash_balance_detailed[0].balance
              ?.b_part_with_symbol
          : "0"
      })`
    )
    console.log(``)
  } else {
    console.log(`Login expired, silahkan login ulang`)
    process.exit()
  }

  const firstResultGetHotel = await getHotelList(
    hotelLocation,
    parseInt(accomodationResult.results[0].dest_id),
    1,
    0,
    checkInDate,
    checkOutDate
  )

  // console.log(firstResultGetHotel.data.searchQueries.search)
  const resultDataListHotel =
    firstResultGetHotel.data.searchQueries.search.pagination
  console.log(`Checkin date ${checkInDate}`)
  console.log(`Checkout date ${checkOutDate}`)
  console.log(
    `Total property ditemukan di ${hotelLocation} adalah ${resultDataListHotel.nbResultsTotal}`
  )
  console.log("")

  const totalDataHotel = resultDataListHotel.nbResultsTotal
  const perPage = 25
  let currentPage = 1
  while ((currentPage - 1) * perPage < totalDataHotel) {
    // while (currentPage == 1) {
    const offset = (currentPage - 1) * perPage
    console.log(
      "Checking page " +
        currentPage +
        " of " +
        Math.ceil(totalDataHotel / perPage)
    )
    try {
      const response = await getHotelList(
        hotelLocation,
        parseInt(accomodationResult.results[0].dest_id),
        perPage,
        offset,
        checkInDate,
        checkOutDate
      )
      const responseListHotel = response.data.searchQueries.search.results
      // console.log(responseListHotel)
      Promise.all(
        responseListHotel.map(async (hotelData) => {
          const hotelId = hotelData.basicPropertyData.id
          const hotelName = hotelData.displayName.text

          let maxRetryAttempts = 4
          let attempts = 0
          let success = false

          do {
            try {
              const resultHotelDetail = await getDetailHotel(
                hotelId,
                checkInDate,
                checkOutDate
              )

              if (resultHotelDetail.length > 0) {
                // check if have reward
                if (
                  resultHotelDetail[0].hasOwnProperty(
                    "composite_price_breakdown"
                  )
                ) {
                  const itemsPriceBreakDown =
                    resultHotelDetail[0].composite_price_breakdown
                  if (itemsPriceBreakDown.hasOwnProperty("reward_amount")) {
                    const itemsData = itemsPriceBreakDown.items.filter(
                      (x) => x.kind === "reward_credit"
                    )

                    const isPoP =
                      resultHotelDetail[0].block[0].paymentterms.hasOwnProperty(
                        "prepayment"
                      )
                        ? JSON.stringify(
                            resultHotelDetail[0].block[0].paymentterms
                              .prepayment
                          )
                            .toString()
                            .includes(`At the property you'll pay`)
                        : false
                    if (isPoP) {
                      console.log(
                        `${chalk.green(
                          `Found! ${hotelName}`
                        )} | Reward : ${chalk.yellow(
                          `${itemsData[0].breakdown[0].formatted_amount}`
                        )}`
                      )
                      if (itemsData[0].breakdown[0].amount.value >= minreward) {
                        fs.appendFileSync(
                          `./result.txt`,
                          `${hotelName} | Reward : ${itemsData[0].breakdown[0].formatted_amount}\n`
                        )
                      }
                    }
                  }
                }

                success = true
              }
            } catch (error) {
              attempts++
            }
          } while (!success && attempts < maxRetryAttempts)
        })
      )
    } catch (err) {
      console.log(err)
      console.log(`skip, terjadi kesalahan`)
    }
    //delay
    await new Promise((resolve) => setTimeout(resolve, 10000))
    // console.clear()
    currentPage++
  }
})()
