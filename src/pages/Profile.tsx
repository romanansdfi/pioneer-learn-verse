
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/navbar/Navbar";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";

const Profile: React.FC = () => {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    bio: "",
    avatar_url: ""
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        full_name: profile.full_name || "",
        username: profile.username || "",
        bio: profile.bio || "",
        avatar_url: profile.avatar_url || ""
      });
    }
  }, [profile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: formData.full_name,
          username: formData.username,
          bio: formData.bio,
          avatar_url: formData.avatar_url,
          updated_at: new Date().toISOString()
        })
        .eq("id", user.id);
        
      if (error) throw error;
      
      toast("Profile updated successfully");
      setIsEditing(false);
    } catch (error: any) {
      toast.error("Error updating profile: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!profile) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-16 pb-8 px-4 md:px-8 lg:px-16 max-w-3xl mx-auto">
        <Card className="mt-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl font-bold">Your Profile</CardTitle>
            {!isEditing ? (
              <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
            ) : (
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                <Button 
                  onClick={handleSubmit} 
                  disabled={isLoading}
                >
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            )}
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-2xl font-semibold">
                  {profile.full_name?.split(" ").map(n => n[0]).join("") || "?"}
                </div>
                <div className="flex-1">
                  {isEditing ? (
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="full_name">Full Name</Label>
                        <Input
                          id="full_name"
                          name="full_name"
                          value={formData.full_name}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="username">Username</Label>
                        <Input
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          name="bio"
                          value={formData.bio}
                          onChange={handleChange}
                          rows={3}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="avatar_url">Avatar URL</Label>
                        <Input
                          id="avatar_url"
                          name="avatar_url"
                          value={formData.avatar_url}
                          onChange={handleChange}
                          placeholder="https://example.com/avatar.jpg"
                        />
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold">{profile.full_name}</h3>
                        <p className="text-gray-600">{profile.username || "No username set"}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-700">Email</h4>
                        <p>{profile.email}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-700">Role</h4>
                        <p className="capitalize">{profile.role}</p>
                        {profile.role === "student" && profile.class && (
                          <p>Class {profile.class}</p>
                        )}
                      </div>
                      
                      {profile.bio && (
                        <div>
                          <h4 className="font-medium text-gray-700">Bio</h4>
                          <p>{profile.bio}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button 
                  variant="destructive" 
                  onClick={async () => {
                    await signOut();
                    navigate("/");
                  }}
                >
                  Sign Out
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
