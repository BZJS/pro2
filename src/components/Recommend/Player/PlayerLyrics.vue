<template>

      <swiper :options="swiperOption" class="cd">
        <swiper-slide class="song-introduction">
         <div class="introduction-img" >
           <img :src="isCurrentSong.picUrl" alt="">
         </div>
          <p>一句当前的歌词</p>

        </swiper-slide>
        <swiper-slide class="lyrics-list">
          <iscroll-view>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li>24</li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li>29</li>
              <li>30</li>
              <li>31</li>
              <li>32</li>
              <li>33</li>
              <li>34</li>
              <li>35</li>
              <li>36</li>
              <li>37</li>
              <li>38</li>
              <li>39</li>
              <li>40</li>
              <li>41</li>
              <li>42</li>
              <li>43</li>
              <li>44</li>
              <li>45</li>
              <li>46</li>
              <li>47</li>
              <li>48</li>
              <li>49</li>
              <li>50</li>
              <li>51</li>
              <li>52</li>
              <li>53</li>
              <li>54</li>
              <li>55</li>
              <li>56</li>
              <li>57</li>
              <li>58</li>
              <li>59</li>
              <li>60</li>
              <li>61</li>
              <li>62</li>
              <li>63</li>
              <li>64</li>
              <li>65</li>
              <li>66</li>
              <li>67</li>
              <li>68</li>
              <li>69</li>
              <li>70</li>
              <li>71</li>
              <li>72</li>
              <li>73</li>
              <li>74</li>
              <li>75</li>
              <li>76</li>
              <li>77</li>
              <li>78</li>
              <li>79</li>
              <li>80</li>
              <li>81</li>
              <li>82</li>
              <li>83</li>
              <li>84</li>
              <li>85</li>
              <li>86</li>
              <li>87</li>
              <li>88</li>
              <li>89</li>
              <li>90</li>
              <li>91</li>
              <li>92</li>
              <li>93</li>
              <li>94</li>
              <li>95</li>
              <li>96</li>
              <li>97</li>
              <li>98</li>
              <li>99</li>
              <li>100</li>
              <li>101</li>
              <li>102</li>
              <li>103</li>
              <li>104</li>
              <li>105</li>
              <li>106</li>
              <li>107</li>
              <li>108</li>
              <li>109</li>
              <li>110</li>
              <li>111</li>
              <li>112</li>
              <li>113</li>
              <li>114</li>
              <li>115</li>
              <li>116</li>
              <li>117</li>
              <li>118</li>
              <li>119</li>
              <li>120</li>
              <li>121</li>
              <li>122</li>
              <li>123</li>
              <li>124</li>
              <li>125</li>
              <li>126</li>
              <li>127</li>
              <li>128</li>
              <li>129</li>
              <li>130</li>
              <li>131</li>
              <li>132</li>
              <li>133</li>
              <li>134</li>
              <li>135</li>
              <li>136</li>
              <li>137</li>
              <li>138</li>
              <li>139</li>
              <li>140</li>
              <li>141</li>
              <li>142</li>
              <li>143</li>
              <li>144</li>
              <li>145</li>
              <li>146</li>
              <li>147</li>
              <li>148</li>
              <li>149</li>
              <li>150</li>
            </ul>
          </iscroll-view>
        </swiper-slide>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import iscrollView from '@/components/iscrollView.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'PlayerLyrics',
  data: function () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active'

        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true

      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    iscrollView
  },
  computed: {
    ...mapGetters([
      'isCurrentSong'
    ])
  }
}
</script>

<style scoped lang="scss">

  .cd{
   position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 200px;
    padding-bottom: 40px;

    .song-introduction{
      //width: 100%;
      .introduction-img{
        width: 80%;
      //height: 80%;
        border: 30px solid #fff;
        border-radius: 50%;
        overflow: hidden;
         margin: 20px auto;
        animation: strap 3s linear infinite;
        img{
          width: 100%;
          height: 100%;
        }
      }
      p{
        text-align: center;
      }
    }
    .lyrics-list{
      width: 100%;
      height: 100%;
      overflow: hidden;
      ul{
        display: flex;
        flex-direction: column;

      }
    }
      .swiper-pagination{
        bottom: 20px;
      }
  }
  @keyframes strap {
    from{
      transform: rotate(0);
    }
    to{
      transform: rotate(360deg);
    }

  }
</style>
<style lang="scss">

@import "../../../assets/css/mixin";
.my-bullet{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #fff;
  margin: 0 20px;
}
.my-bullet-active{
  width: 60px;
  @include bg_color();
}
</style>
