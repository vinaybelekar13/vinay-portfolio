import {ImageResponse} from 'next/og';
import {getTranslations} from 'next-intl/server';
import {siteConfig} from '@/config/site';

export const alt = 'Vinay Santosh Belekar — B.Tech ECE Student | AI/ML & Software';
export const size = {width: 1200, height: 630};
export const contentType = 'image/png';

export default async function OgImage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta'});
  return new ImageResponse(
    <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%',background:'#0a0a0a',color:'#fff',padding:'60px 80px',fontFamily:'sans-serif',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',backgroundSize:'24px 24px'}} />
      <div style={{display:'flex',alignItems:'center',gap:'12px',fontSize:18,color:'rgba(255,255,255,0.4)',marginBottom:'20px',position:'relative'}}><span style={{color:'#10b981',fontWeight:700}}>$</span><span>whoami</span></div>
      <div style={{display:'flex',flexDirection:'column',flex:1,justifyContent:'center',position:'relative',gap:'16px'}}>
        <div style={{fontSize:64,fontWeight:700,lineHeight:1.1,letterSpacing:'-0.03em'}}>{siteConfig.name}</div>
        <div style={{fontSize:28,color:'#10b981',fontWeight:500}}>{siteConfig.title}</div>
        <div style={{fontSize:22,color:'rgba(255,255,255,0.4)',maxWidth:'850px',lineHeight:1.5,marginTop:'8px'}}>{t('description')}</div>
      </div>
      <div style={{fontSize:18,color:'rgba(255,255,255,0.25)',position:'relative',fontFamily:'monospace'}}>vinaybelekar13 · VIT Chennai</div>
      <div style={{position:'absolute',bottom:0,left:0,right:0,height:'3px',background:'linear-gradient(to right, #10b981 0%, #10b981 30%, transparent 80%)'}} />
    </div>,
    {...size},
  );
}
