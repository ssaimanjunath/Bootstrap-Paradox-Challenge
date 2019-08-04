package com.nizhal.milkbasket;

import android.content.Intent;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.graphics.Color;
import android.graphics.Typeface;
import android.support.v4.content.res.ResourcesCompat;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import java.util.Locale;

public class Language extends AppCompatActivity {
    String[] lang;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        ActionBar actionBar = getSupportActionBar();
        TextView tv = new TextView(getApplicationContext());
        Typeface typeface = ResourcesCompat.getFont(this, R.font.merlo_regular);
        RelativeLayout.LayoutParams lp = new RelativeLayout.LayoutParams(
                RelativeLayout.LayoutParams.MATCH_PARENT, // Width of TextView
                RelativeLayout.LayoutParams.WRAP_CONTENT); // Height of TextView
        tv.setLayoutParams(lp);
        tv.setText(R.string.chooseLanguage); // ActionBar title text
        tv.setTextSize(22);
        tv.setTextColor(Color.BLACK);
        tv.setTextAlignment(View.TEXT_ALIGNMENT_CENTER);
        tv.setTypeface(typeface);
        /*Drawable backArrow = getResources().getDrawable(R.drawable.ic_view_headline);
        backArrow.setColorFilter(getResources().getColor(R.color.grad1), PorterDuff.Mode.SRC_ATOP);*/
        actionBar.setCustomView(tv);
        /*actionBar.setHomeAsUpIndicator(backArrow);*/
        actionBar.setDisplayOptions(ActionBar.DISPLAY_SHOW_CUSTOM);
        setContentView(R.layout.activity_language);
        lang = new String[]{"English","Hindi","Kannada"};
        ArrayAdapter adapter = new ArrayAdapter<String>(this,R.layout.listview_row, lang);
        ListView mlistView = findViewById(R.id.lang);
        mlistView.setAdapter(adapter);
        mlistView.setOnItemClickListener(new AdapterView.OnItemClickListener()
        {
            @Override
            public void onItemClick(AdapterView<?> arg0, View arg1, int position, long arg3)
            {
                if(position == 0)
                {
                    Intent in = new Intent(getBaseContext(),HomePage.class);
                    startActivity(in);
                    finish();
                }
                else if(position == 1)
                {
                    setLocale("hi");
                }
                else
                {
                    setLocale("ka");
                }
            }
        });
    }
    public void setLocale(String lang)
    {
        Locale myLocale = new Locale(lang);
        Resources res = getResources();
        DisplayMetrics dm = res.getDisplayMetrics();
        Configuration conf = res.getConfiguration();
        conf.locale = myLocale;
        res.updateConfiguration(conf,dm);
        Intent ref = new Intent(getBaseContext(),HomePage.class);
        finish();
        startActivity(ref);
    }
}
